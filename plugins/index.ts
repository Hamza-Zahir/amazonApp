export default defineNuxtPlugin(async () => {
  useState("Country", () => "");
  useState("UserName", () => "");
  useState("isLoggedIn", () => false);
  const { checkIsLoggedIn } = useAuth();

  // check If the user has Logged in
 await checkIsLoggedIn();
});
