export { subirCategoria, listarCategoriaProducto, eliminarCategoriaProducto, actualizarCategoriaProducto }

const FIRESTORE_NAME = "categoria_productos";

//Sube datos de las categorias al la BBDD
const subirCategoria = async (docData) => {
    await uploadDatatoStore(FIRESTORE_NAME, docData);
}

//Lista los elementos existentes  de categorias en la BBDD
const listarCategoriaProducto = async () => {
    return getDataFromStore(FIRESTORE_NAME);
}

//Elimina un objeto categoria de la BBDD
const eliminarCategoriaProducto = async (identificador) => {
    deleteFromStore(FIRESTORE_NAME, identificador);
}

//Actualiza informacion de un objeto específico de la BBDD
const actualizarCategoriaProducto = async (identificador, data) => {
    updateDataToStore(FIRESTORE_NAME, identificador, data)
}
