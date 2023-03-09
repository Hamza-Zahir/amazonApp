const useCart = () => {
  const { getProductById } = useProduct();
  const userCart = useState("UserCart");
  const userCartSaveForLater = useState("UserCartSaveForLater");
  const TotalPricesInCart: any = useState("TotalPricesInCart");
  const TotalItemsInCart = useState("TotalItemsInCart");
  const isGiftInCartItems = useState("isGiftInCartItems");

  const addItemToDB = async (body: any) => {
    try {
      const user = useCookie<any>("user");

      const cartItem: any = await $fetch(`/api/cart/addItem`, {
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
  const loadTotalItemsInCart = async () => {
    try {
      const user: any = useCookie("user");

      TotalItemsInCart.value = 0;
      if (!user.value) {
        return;
      }

      const Cart: any = await $fetch(`/api/cart/userCart/${user.value.userId}`);
      // userSaveForLater

      let _userCart: any = Cart.userCart;
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
      if (!user.value) {
        return;
      }

      const Cart: any = await $fetch(`/api/cart/userCart/${user.value.userId}`);

      let _userCart: any = Cart.userCart;
      let _userCartSaveForLater: any = Cart.userCartSaveForLater;

      userCart.value = [];
      TotalPricesInCart.value = 0;
      TotalItemsInCart.value = 0;
      isGiftInCartItems.value = false;

      if (_userCart.length) {
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
      }
      if (_userCartSaveForLater.length) {
        _userCartSaveForLater = await Promise.all(
          _userCartSaveForLater.map(async (item: any) => {
            const product = await getProductById(item.productId);

            return { ...item, product };
          })
        );
      }

      userCart.value = _userCart;
      userCartSaveForLater.value = _userCartSaveForLater;
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

      const deletedState = await $fetch(`/api/cart/${cartId}`, {
        method: "delete",
        headers: {
          authentication: user.value.token,
        },
      });

      return deletedState;
    } catch (error) {
      throw error;
    }
  };
  const AddToSaveForLater = async (cartId: String) => {
    try {
      const user = useCookie<any>("user");

      
     const savedState =  await $fetch(`/api/cart/SaveForLater/${cartId}`, {
        method: "put",
        headers: {
          authentication: user.value.token,
        },
      });

      return savedState;
    } catch (error) {
      throw error;
    }
  };

  const DeleteFromSaveForLater = async (cartId: String) => {
    try {
      const user = useCookie<any>("user");

      
     const DeleteState =  await $fetch(`/api/cart/SaveForLater/${cartId}`, {
        method: "delete",
        headers: {
          authentication: user.value.token,
        },
      });

      return DeleteState;
    } catch (error) {
      throw error;
    }
  };
// MoveToCart
const MoveToCart = async (cartId: String) => {
  try {
    const user = useCookie<any>("user");

    
   const MovedState =  await $fetch(`/api/cart/SaveForLater/MoveToCart/${cartId}`, {
      method: "put",
      headers: {
        authentication: user.value.token,
      },
    });

    return MovedState;
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
    AddToSaveForLater,
    DeleteFromSaveForLater,
    MoveToCart
  };
};

export default useCart;
