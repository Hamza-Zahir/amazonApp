export default defineNuxtPlugin(async () => {
  useState("Country", () => "");
  useState("UserName", () => "");
  useState("isLoggedIn", () => false);
  useState("UserCart", () => []);
  useState("TotalPricesInCart", () => 0);
  useState("TotalItemsInCart", () => 0);
  useState("isGiftInCartItems", () => false);

  const { checkIsLoggedIn } = useAuth();
  const { loadTotalItemsInCart } = useCart();

  await checkIsLoggedIn();
  await loadTotalItemsInCart(null);
});
