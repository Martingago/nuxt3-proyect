<template>
    <form>
        <h4>Sube un conjunto de imagenes</h4>
        <label for="uploadArrayImages">Vistas del producto</label>
        <input type="file" @change="seleccionarImagenes($event)" accept="image/*" name="uploadArrayImages"
            id="uploadArrayImages" multiple>
            <div id="preview-images" class="d-flex gap-2">
            <img @click="eliminarImagen(index)"  class="preview-img border border-2" v-for="(src, index) in images" :key="index" :src="src">
        </div>
        <button @click="uploadArrayImages('productos_images','ref34DgHdfSDdfs34df89olD', arrayImages)" class="btn btn-primary" type="button"> Subir imagen</button>
    </form>
</template>


<script setup>

const arrayImages = ref([]);
const arrayImagesSRC = ref([]); //url de las imagenes que se previsualizarán en HTML

let images = ref([]);
const seleccionarImagenes = (event) => {
    let files = event.target.files;
    for(let i=0; i<files.length; i++) {
        arrayImages.value.push(files[i]);
        let reader = new FileReader();
        reader.onloadend = function() {
            images.value.push(reader.result);
        }
        reader.readAsDataURL(files[i]);
    }
    console.log(arrayImages.value)
}

const eliminarImagen = (index) => {
    images.value.splice(index, 1);
    arrayImages.value.splice(index,1)
}


</script>

<style scoped>

.preview-img{
    width: 120px;
    height: 120px;
    object-fit: contain;
    background-color: lightgray;
}
</style>