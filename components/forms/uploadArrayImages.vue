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
        <pre>{{ props.arrayImages }}</pre>
    </div>
</template>


<script setup>

const emit = defineEmits(['array-images-update']);

const props = defineProps({
    arrayImages: Array
});

const arrayObjetosImage = ref([]); //array de objetos image que se sube a la BBDD
const arrayImagesURL = ref([]); //url de las imagenes para mostrar en pantalla

//Observa los props del articulo a modificar
watch(props, () => {
    console.log("lectura de props",props.arrayImages)
    props.arrayImages.forEach(data => {
        arrayImagesURL.value.push(data.url);
    });
   
//    console.log("lectura de props", arrayImagesURL.value)
},{ immediate: true })


watch(arrayObjetosImage.value, () => {
    //cuando se actualiza se envia hacia arriba un array que contiene objetos con la informacion de cada image: path, file, y boolean si fue modificada
    emit('array-images-update', arrayObjetosImage)
})


const seleccionarImagenes = (event) => {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {

        const dataImage = {
            file: files[i],
            path: null,
            updated: false,
        }

        //arrayImagesFile.value.push(files[i]);
        let reader = new FileReader();
        reader.onloadend = function () {
            arrayImagesURL.value.push(reader.result);
        }
        reader.readAsDataURL(files[i]);
        arrayObjetosImage.value.push(dataImage);
    }
}


const eliminarImagen = (index) => {
    arrayImagesURL.value.splice(index, 1);
    arrayObjetosImage.value.splice(index, 1)
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