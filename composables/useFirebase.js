import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export { createUser, signInUser, initUser, signOutUser }

const createUser = async (user_data) => {
    const { $auth } = useNuxtApp();
    //Crear usuario
    return await createUserWithEmailAndPassword($auth, user_data.user_email, user_data.user_password)
        .then((userCredential) => {
            // El usuario se ha creado correctamente.
            const { user_name, user_chart, user_orders, user_returns, accept_promotions } = user_data;
            const newUserData = { user_name, user_chart, user_orders, user_returns, accept_promotions };
            const userID = userCredential.user.uid;

            uploadDataWithIDtoStore("datos_usuarios", userID, newUserData);
            return true;
        })
        .catch((error) => {
            const errorCode = error.code;
            let userFriendlyMessage = '';
            switch (errorCode) {
                case 'auth/invalid-email':
                    userFriendlyMessage = 'La dirección de correo electrónico no es válida.';
                    break;
                case 'auth/email-already-in-use':
                    userFriendlyMessage = 'Ya existe una cuenta con esa dirección de correo electrónico.';
                    break;
                default:
                    userFriendlyMessage = 'Ha ocurrido un error desconocido.';
            }
            return userFriendlyMessage;
        });
}


const signInUser = async (email, password) => {
    const { $auth } = useNuxtApp();
    const credentials = await signInWithEmailAndPassword($auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
        });
    return credentials;
}


const initUser = () => {
    const { $auth } = useNuxtApp();
    //Se añade la informacion del usuario en el store:
    const firebaseUser = useFirebaseUser();
    firebaseUser.value = $auth.currentUser;
    onAuthStateChanged($auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            console.log("auth changed", user)
        }
        firebaseUser.value = user;
    });
}


const signOutUser = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
}



