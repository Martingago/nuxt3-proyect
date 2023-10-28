import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
export { createUser, signInUser, initUser, signOutUser }

/**
 * Crea una cuenta de usuario autenticada por Google. 
 * Esta funcion recibe 2 objetos que conforman la informacion total del usuario:
 * @param {*} user_private objeto con la informacion privada del usuario => No tiene acceso la administracion
 * @param {*} user_public objeto con la informacion publica del usuario => Infomacion a la que accede el sistema: Carrito, nombre, pedidos, promociones
 * @returns 
 */
const createUser = async (user_private, user_public) => {
    const { $auth } = useNuxtApp();
    //Crear usuario
    return await createUserWithEmailAndPassword($auth, user_private.user_email, user_private.user_password)
        .then((userCredential) => {
            // El usuario se ha creado correctamente.
            const userID = userCredential.user.uid;
            //Se crea la referencia de usuario con su información pública en la BBDD de datos_usuarios
            uploadDataWithIDtoStore("datos_usuarios", userID, user_public);
            return true;
        })
        //Valida errores en la creación del usuario
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
            console.log("usuario logueado con uid:", uid)
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



