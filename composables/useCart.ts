const useCart = () => {
  const { getProductById } = useProduct();
  const userCart = useState("UserCart");
  const TotalPricesInCart: any = useState("TotalPricesInCart");
  const TotalItemsInCart = useState("TotalItemsInCart");
  const isGiftInCartItems = useState("isGiftInCartItems");
  const addItemToDB = async (body: any) => {
    try {
      const user = useCookie<any>("user");

      const cartItem = await $fetch(`/api/cart/addItem`, {
        method: "post",
        body,
        headers: {
          authentication: user.value.token,
        },
      });

      return cartItem;
    } catch (error) {
      throw error;
    }
  };
  const loadTotalItemsInCart = async (_userId:any) => {
    try {
      const user: any = useCookie("user");
      TotalItemsInCart.value = 0;
    
      if (!user.value && !_userId) {
        return;
      }

      let _userCart: any = await $fetch(
        `/api/cart/userCart/${user.value.userId || _userId}`
      );
      if (!_userCart.length) {
        return;
      }

      _userCart.map((item: any) => {
        TotalItemsInCart.value += item.quantity;
      });
    } catch (error) {
      throw error;
    }
  };
  const loadUserCart = async () => {
    try {
      const user: any = useCookie("user");

      let _userCart: any = await $fetch(
        `/api/cart/userCart/${user.value.userId}`
      );
      userCart.value = [];
      TotalPricesInCart.value = 0;
      TotalItemsInCart.value = 0;
      isGiftInCartItems.value = false;

      if (!_userCart.length) {
        return _userCart;
      }

      _userCart = await Promise.all(
        _userCart.map(async (item: any) => {
          const product = await getProductById(item.productId);

          return { ...item, product };
        })
      );

      _userCart.map((item: any) => {
        TotalPricesInCart.value += item.quantity * item.product.currentPrice;
        TotalItemsInCart.value += item.quantity;
        if (item.isGift) {
          isGiftInCartItems.value = item.isGift;
        }
      });

      userCart.value = _userCart;

      return _userCart;
    } catch (error) {
      throw error;
    }
  };

  const modifyIsGift = async (cartId: String, isGift: boolean) => {
    try {
      const user = useCookie<any>("user");

      const cartItem = await $fetch(`/api/cart/${cartId}`, {
        method: "PUT",
        body: { isGift },
        headers: {
          authentication: user.value.token,
        },
      });

      return cartItem;
    } catch (error) {
      throw error;
    }
  };
  const modifyQuantity = async (cartId: String, quantity: Number) => {
    try {
      const user = useCookie<any>("user");

      const cartItem = await $fetch(`/api/cart/${cartId}`, {
        method: "PUT",
        body: { quantity },
        headers: {
          authentication: user.value.token,
        },
      });

      return cartItem;
    } catch (error) {
      throw error;
    }
  };
  const deleteItem = async (cartId: String) => {
    try {
      const user = useCookie<any>("user");

      const cartItem = await $fetch(`/api/cart/${cartId}`, {
        method: "delete",
        headers: {
          authentication: user.value.token,
        },
      });

      return cartItem;
    } catch (error) {
      throw error;
    }
  };
  return {
    addItemToDB,
    loadUserCart,
    modifyIsGift,
    modifyQuantity,
    loadTotalItemsInCart,
    deleteItem,
  };
};

export default useCart;
