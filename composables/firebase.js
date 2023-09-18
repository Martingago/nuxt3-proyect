import { addDoc, collection, getDocs, getDoc, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";

export { uploadDatatoStore, getSingleDocumentData, getDataFromStore, deleteFromStore, updateDataToStore, getProductByAtribute }

const getSingleDocumentData = async (coleccion, id) => {
    const { $db } = useNuxtApp();
    const docRef = doc($db, coleccion, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        return docSnap.data();
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        return null;
    }
}

const getProductByAtribute = async (coleccion, atributo, valor) => {
    const { $db } = useNuxtApp();
    const productosRef = collection($db, coleccion);
    const q = query(productosRef, where(atributo, "==", valor));
    const querySnapshot = await getDocs(q);
    let producto = null;
    querySnapshot.forEach((doc) => {
        if (producto != null) {
            return
        }
        const item = {
            id: doc.id,
            ...doc.data()
        }
        producto = item;
    })
    return producto;
}


/**
 * Obtiene informacion procediente de una colección especificada
 * @param {*} coleccion referencia de la colección sobre la que queremos extraer los datos
 * @returns {Array} con los datos de la colección seleccionada
 */
const getDataFromStore = async (coleccion) => {
    const data = []
    const { $db } = useNuxtApp();
    try {
        const querySnapshot = await getDocs(collection($db, coleccion));
        querySnapshot.forEach(async (doc) =>{
            //se le añade su ID de su coleccion
        console.log("marca", doc.data().marca)
            const dato = await getSingleDocumentData("marca_productos", doc.data().marca);
            console.log(dato)
            const item = {
                id: doc.id,
                ...doc.data()
            }
            data.push(item)
        });
    } catch (error) {
        console.log(error)
    }
    return data;
}

/**
 * Sube datos a una coleccion específicada
 * @param {*} coleccion colección en la que se subirán los datos
 * @param {*} docData información que se subirá al store
 */
const uploadDatatoStore = async (coleccion, docData) => {
    const { $db } = useNuxtApp();
    try {
        const docRef = await addDoc(collection($db, coleccion), docData);
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.log("Error al subir el fichero: ", error)
    }
}

/**
 * Eliimina un dato procedente de una colección
 * @param {*} coleccion colección de la cual se va a eliminar un valor
 * @param {*} identificador id, del documento a eliminar
 */
const deleteFromStore = async (coleccion, identificador) => {
    const { $db } = useNuxtApp();
    try {
        await deleteDoc(doc($db, coleccion, identificador));
    } catch (error) {
        console.log(error)
    }
}

/**
 * Actualiza información de un fichero en la Base de datos
 * @param {*} coleccion coleccion en la que se encuentra el fichero a modificar
 * @param {*} identificador id del fichero que se va a modificar
 * @param {*} data información actualizada que se sobreescribirá a los datos del fichero
 */
const updateDataToStore = async (coleccion, identificador, data) => {
    console.log("id", identificador)
    try {
        const { $db } = useNuxtApp();
        const docRef = doc($db, coleccion, identificador)
        await updateDoc(docRef, data)

    } catch (error) {
        console.log("aqui error:", error)
    }

}






