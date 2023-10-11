import { onAuthStateChanged, getAuth } from "firebase/auth";
import { isAuth } from "~~/store/authUser";
export default defineNuxtRouteMiddleware(async () => {
  if (process.client) {
    const { $auth } = useNuxtApp();
    console.log("auth:", $auth);
    onAuthStateChanged($auth, (user) => {
      if(user){
        isAuth.value = true;
        console.log("user conectado ", isAuth.value)
      }else{
        isAuth.value = false;
        console.log("user no contecado ", isAuth.value)
      }
    });
  }
});