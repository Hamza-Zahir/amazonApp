const useLocation = () => {
  const isLoggedIn = useState("isLoggedIn");
  const country = useState("Country");
  const { postLocationToDb } = useAuth();

  const ChooseLocation = async (location: String) => {
    country.value = location;
    if (isLoggedIn.value) {
      await postLocationToDb(location);
    } else {
      const _location = useCookie<String>("location");
      _location.value = location;
    }
  };
  return { ChooseLocation };
};
export default useLocation;
