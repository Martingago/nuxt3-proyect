import { ref, uploadBytes, getDownloadURL, deleteObject, listAll } from "firebase/storage";
export { uploadMainImage, uploadArrayImages, deleteAllContentFromReference, deleteRefenceImage }


/**
 * Sube una única imagen al storage, por defecto se introducirá en una carpeta llamada 'main'
 * @param {*} coleccion 
 * @param {*} id 
 * @param {*} file 
 * @returns {Object} con la informacion de la URL de descarga de la imagen y la dirección Path de la imagen
 */
const uploadMainImage = async (coleccion, id, file) => {
    const { $storage } = useNuxtApp();
    let urlImage = {};
    try {
        if (file) {
            const path = `${coleccion}/${id}/portada/${file.name}` //path conformado por el id del producto y la carpeta portada
            const imageRef = ref($storage, path);
            await uploadBytes(imageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
            urlImage = {
                url: await getDownloadURL(imageRef),
                path: path
            }
        } else {
            console.log("no se ha añadido una imagen")
        }
    } catch (error) {
        console.log(error)
    }
    return urlImage;
}

/**
 * Sube con conjunto de imágenes, por defecto se subirán a una carpeta llamada 'views'
 * @param {*} coleccion 
 * @param {*} id 
 * @param {*} arrayFiles 
 * @returns array de strings que contienen la direccion de la imagen
 */
const uploadArrayImages = async (coleccion, id, arrayFiles) => {
    const arrayImages = [];
    const { $storage } = useNuxtApp();
    try {
        if (arrayFiles && arrayFiles.length > 0) {
            for (let i = 0; i < arrayFiles.length; i++) {
                const path = `${coleccion}/${id}/views/${arrayFiles[i].name}` //path conformado por el id de producto y la carpeta de views
                const imagesRef = ref($storage, path);
                await uploadBytes(imagesRef, arrayFiles[i]).then((snapshot) => {
                    console.log(`Uploaded a blob or file!: [${i + 1} de: ${arrayFiles.length}]`);
                });
                const urlImage = await getDownloadURL(imagesRef);
                arrayImages.push({
                    url: urlImage,
                    path: path
                })
            }
        } else {
            console.log("No existen imagenes en el array")
        }
    } catch (error) {
        console.log(`Ha ocurrido un error al subir los archivos: ${error}`)
    }
    console.log("Los archivos se han subido con éxito!")
    console.log("array de lectura:", arrayImages)
    return arrayImages
}

/**
 * Recibe como parametro el identificador de la imagen y elimina TODOS los datos de las carpetas y subcarpetas existentes en la BBDD
 * @param {*} identificador 
 */
const deleteAllContentFromReference = async (identificador) => {
    const { $storage } = useNuxtApp();
    const mainRef = ref($storage, identificador);
    const listMain = await listAll(mainRef);
    //Se recorren todas las carpetas que existen:
    listMain.prefixes.forEach(async (folderRef) => {
        const submainRef = await listAll(folderRef);
        submainRef.items.forEach(imagen => {
            const img = imagen._location.path_;
            const imageRef = ref($storage, img)
            // Delete the file
            deleteObject(imageRef).then(() => {
                console.log("imagen eliminada")
                // File deleted successfully
            }).catch((error) => {
                console.log("error:", error)
                // Uh-oh, an error occurred!
            });
        });
    })

}

const deleteRefenceImage = async (reference) => {
    const { $storage } = useNuxtApp();
    // Create a reference to the file to delete
    const desertRef = ref($storage, reference);

    // Delete the file
    deleteObject(desertRef).then(() => {
        console.log("imagen principal eliminada")
        // File deleted successfully
    }).catch((error) => {
        console.log("error al eliminar imagen principal:", error)
        // Uh-oh, an error occurred!
    })

}
