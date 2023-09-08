export { subirCategoria, listarCategoriaProducto, eliminarCategoriaProducto, actualizarCategoriaProducto }

const FIRESTORE_DATABASE = "categoria_productos";

//Sube datos de las categorias al la BBDD
const subirCategoria = async (docData) => {
    await uploadDatatoStore(FIRESTORE_DATABASE, docData);
}

//Lista los elementos existentes  de categorias en la BBDD
const listarCategoriaProducto = async () => {
    return getDataFromStore(FIRESTORE_DATABASE);
}

//Elimina un objeto categoria de la BBDD
const eliminarCategoriaProducto = async (identificador) => {
    deleteFromStore(FIRESTORE_DATABASE, identificador);
}

//Actualiza informacion de un objeto específico de la BBDD
const actualizarCategoriaProducto = async (identificador, data) => {
    updateDataToStore(FIRESTORE_DATABASE, identificador, data)
}
