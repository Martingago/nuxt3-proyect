import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { useUserStore } from "~~/store/authUser";

export {initializeAuthUser}

const initializeAuthUser = () => {
    const { $auth } = useNuxtApp();
    const userStore = useUserStore();
    onAuthStateChanged($auth, async (user) => {
      if (user) {
        userStore.setAuth(true);
        const userId = $auth.currentUser.uid;
        if (!userStore.info){ //Si ya tiene los datos cargados no comprueba nada
          
          const { $db } = useNuxtApp();
          const docRef = doc($db, "datos_usuarios", userId);
          // Establece un oyente en el documento
          onSnapshot(docRef, async (docSnap)  => {
            if (docSnap.exists()) {
              // Guarda los datos del usuario en el store
              
             userStore.setUserInfo(docSnap.data(), userId);
            }
          });
        }
      } else {
        userStore.setAuth(false);
        userStore.info = null;
      }
    })

}