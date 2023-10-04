<template>
    <div class="d-flex flex-column gap-2">

        <label for="uploadArrayImages">Vistas del producto</label>
        <input type="file" @change="seleccionarImagenes($event)" accept="image/*" name="uploadArrayImages"
            id="uploadArrayImages" multiple>
        <!-- preview de imagenes -->
        <div class="preview-images d-flex gap-2 rounded">
            <img @click="eliminarImagen(index)" class="preview-img border border-2" v-for="(src, index) in arrayImagesURL"
                :key="index" :src="src">
        </div>
        <p>Elementos del arrayPushImage</p>
        <pre>{{ arrayPushImage }}</pre>
        <p>Elementos que debo eliminar:</p>
        <pre>{{ arrayDeleteObjetosImage }}</pre>
    </div>
</template>


<script setup>

const emit = defineEmits(['array-images-update']);


//Objetos que puede recibir el componente (Casos de edición de datos en los que se recibe un Array de antiguas imágenes)
const props = defineProps({
    arrayImages: Array
});

//CONSTANTES
const arrayDeleteObjetosImage = ref([]); //Almacén de imagenes que se eliminarán si el usuario confirma los cambios
const arrayPushImage = ref([]); //array de objetos imagen que se subirán a la BBDD si el usuario confirma los cambios
const arrayImagesURL = ref([]); //url de las imagenes para mostrar en pantalla

//Observa los props del articulo a modificar
watch(props, () => {
    console.log("props del array de imágenes: ", props)
    arrayDeleteObjetosImage.value = []; //Cada vez que  se actualizan los props, se resetea el array de archivos a eliminar
    arrayPushImage.value = []; //Cada vez que se actualicen los props, se resetea el Array de imágenes
    arrayImagesURL.value = []; //Se reinicia el array de imágenes que el usuario ve
    props.arrayImages.forEach(data => {
        arrayImagesURL.value.push(data.url);
        const d = {
            ...data,
            registered: true
        }
        arrayPushImage.value.push(d);
    });
}, { immediate: true })

/**
 * Cuándo se actualizan las imágenes por parte del usuario se envián al componente padre:
 *  ==> Array de imágenes que se deberán subir a la BBDD 
 *  ==> Array de imágenes que se deberán de eliminar de la BBDD
 */

watch(arrayPushImage.value, () => {
    emit('array-images-update', {
        arrayPushImage,
        arrayDeleteObjetosImage
    })
})

const seleccionarImagenes = (event) => {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        //A las imágenes que el usuario selecciona de su ordenador, se le atribuye una propiedad registered: false; 
        //Que indica que la imagén no ha sido subida previamente a la BBDD
        const dataImage = {
            file: files[i],
            registered: false,
        }
        let reader = new FileReader();
        reader.onloadend = function () {
            arrayImagesURL.value.push(reader.result);
        }
        reader.readAsDataURL(files[i]);
        //En el array de imágenes para subir se añade la imagen que el usuario ha añadido
        arrayPushImage.value.push(dataImage);
    }
}

/**
 * Función que elimina una imagen de un producto.
 * Pueden presentarse 2 situaciones:
 *  ==> La imagen deberá eliminarse de la BBDD ya que se trata de una edición de producto
 *  ==> La imagen ha sido borrada en el objeto local del administrador || Se elimina del array de Imágenes que iban a ser subidas/actualizadas en la BBDD
 * @param {*} index ínidce de la imagen a eliminar
 */
const eliminarImagen = (index) => {
    //Se comprueba si el objeto tiene la propiedad registered true => Indica que el la imagen se encuentra en la BBDD y deberá ser eliminada
    if (arrayPushImage.value[index].registered === true) {
        arrayDeleteObjetosImage.value.push(arrayPushImage.value[index]);
    }
    arrayImagesURL.value.splice(index, 1); //Se actualizan las imagenes previsualizadas en pantalla hacia el usuario
    arrayPushImage.value.splice(index, 1); //Se actualizan las imágenes que el usuario desechó subir
}

</script>

<style scoped>
.preview-images {
    height: 120px;
    min-width: 250px;
    background-color: rgba(247, 236, 236, 0.856);
}

.preview-img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    background-color: lightgray;
}
</style>