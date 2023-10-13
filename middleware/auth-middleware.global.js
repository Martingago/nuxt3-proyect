import { onAuthStateChanged } from "firebase/auth";
import { isAuth } from "~~/store/authUser";
import { doc, onSnapshot } from "firebase/firestore";
import { useUserStore } from "~~/store/authUser";

export default defineNuxtRouteMiddleware(async () => {
  if (process.client) {
    const { $auth } = useNuxtApp();
    const userStore = useUserStore();

    onAuthStateChanged($auth, async (user) => {
      if (user) {
        isAuth.value = true;
        const userId = $auth.currentUser.uid;
        if (!userStore.info) { //Si ya tiene los datos cargados no comprueba nada
          console.log("datos vacios, leyendooo");

          const { $db } = useNuxtApp();
          const docRef = doc($db, "datos_usuarios", userId);
          // Establece un oyente en el documento
          onSnapshot(docRef, (docSnap) => {
            if (docSnap.exists()) {
              // Guarda los datos del usuario en el store
              userStore.setUserInfo(docSnap.data(), userId);
              console.log(userStore.info)
            }else{
              console.log("no existe")
            }
          });
        }
      } else {
        console.log("eliminandooo datooss")
        isAuth.value = false;
        userStore.info = null;
      }
      
    })
  }
});