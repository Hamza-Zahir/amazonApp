export default defineNuxtPlugin(async () => {
  useState("Country", () => "");
  useState("UserName", () => "");
  useState("isLoggedIn", () => false);
  useState("UserCart", () => []);
  useState("UserCartSaveForLater", () => []);
  useState("TotalPricesInCart", () => 0);
  useState("TotalItemsInCart", () => 0);
  useState("isGiftInCartItems", () => false);

  const { checkIsLoggedIn } = useAuth();

  await checkIsLoggedIn();
});
