export default defineNuxtRouteMiddleware(() => {
  const isLoggedIn = useState("isLoggedIn");
if(isLoggedIn.value){
return navigateTo("/")
}

});
