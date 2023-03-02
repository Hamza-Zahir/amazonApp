const useAuth = () => {
  const remainingMilliseconds = 24 * 60 * 60 * 1000; // 24 hours
  const userName = useState("UserName");
  const isLoggedIn = useState("isLoggedIn");
  const country = useState("Country");
  const TotalItemsInCart = useState("TotalItemsInCart");
  const { loadLocation } = useAmazon();

  const SignUp = async (data: any) => {
    if (!data) return;
    try {
      const {
        token,
        userId,
        userName: _userName,
      } = await $fetch("/api/signUp", {
        method: "post",
        body: data,
      });

      const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
      const _user = {
        token,
        userId,
        expiryDate,
      };

      const user = useCookie<any>("user", { expires: expiryDate });
      user.value = _user;

      userName.value = _userName;
      isLoggedIn.value = true;
      setAutoLogout(remainingMilliseconds);
      navigateTo("/");
    } catch (error) {
      throw error;
    }
  };

  const SignIn = async (data: any, KeepSignedIn: any) => {
    if (!data) return;
    try {
      const {
        token,
        userId,
        location,
        userName: _userName,
      } = await $fetch("/api/signIn", {
        method: "put",
        body: data,
      });

      let _remainingMilliseconds = remainingMilliseconds;

      if (KeepSignedIn) {
        _remainingMilliseconds = remainingMilliseconds * 60; // two months
      }

      const expiryDate = new Date(
        new Date().getTime() + _remainingMilliseconds
      );
      const _user = {
        token,
        userId,
        expiryDate,
      };
      const user = useCookie<any>("user", { expires: expiryDate });
      user.value = _user;

      userName.value = _userName;
      isLoggedIn.value = true;
      if (location) {
        country.value = location;
      }

      setAutoLogout(_remainingMilliseconds);
      navigateTo("/");
    } catch (error) {
      throw error;
    }
  };
  const logoutHandler = async () => {
    useCookie("user").value = null;
    isLoggedIn.value = false;
    userName.value = "";
    TotalItemsInCart.value = 0;
    country.value = await loadLocation();

    navigateTo("/signIn");
  };
  const setAutoLogout = (milliseconds: any) => {
    setTimeout(() => {
      logoutHandler();
    }, milliseconds);
  };
  const checkIsLoggedIn = async () => {
    const user = useCookie<any>("user");
    if (!user.value) {
      country.value = await loadLocation();
      return;
    }
    const { expiryDate, userId } = user.value;
    const { name, location }: any = await getUserById(userId);

    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();
    userName.value = name;
    isLoggedIn.value = true;
    country.value = location || (await loadLocation());
    setAutoLogout(remainingMilliseconds);
  };

  const getUserByEmail = async (email: string) => {
    const _user = await $fetch(`/api/user/getByEmail/${email}`);
    return _user;
  };

  const getUserById = async (id: string) => {
    const _user = await $fetch(`/api/user/${id}`);
    return _user;
  };

  const postLocationToDb = async (location: String) => {
    const user = useCookie<any>("user");
    await $fetch(`/api/user/modify`, {
      method: "put",
      body: { location },
      headers: {
        authentication: user.value.token,
      },
    });
  };

  return {
    SignUp,
    SignIn,
    logoutHandler,
    checkIsLoggedIn,
    getUserByEmail,
    getUserById,
    postLocationToDb,
  };
};

export default useAuth;
