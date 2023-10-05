import { onAuthStateChanged, getAuth } from "firebase/auth";
import { isAuth } from "~~/store/authUser";
export default defineNuxtRouteMiddleware(async () => {
  if (process.client) {
    const { $auth } = useNuxtApp();
    console.log("auth:", $auth);
    onAuthStateChanged($auth, (user) => {
      if(user){
        isAuth.value = true;
      }else{
        isAuth.value = false;
      }
    });
  }
});