<template>
    <div class="d-flex flex-column gap-2">
        <label for="uploadArrayImages">Vistas del producto</label>
        <input type="file" @change="seleccionarImagenes($event)" accept="image/*" name="uploadArrayImages"
            id="uploadArrayImages" multiple>
            <!-- preview de imagenes -->
        <div class="preview-images d-flex gap-2 rounded">
            <img @click="eliminarImagen(index)" class="preview-img border border-2" v-for="(src, index) in images"
                :key="index" :src="src">
        </div>
    </div>
</template>


<script setup>

const emit = defineEmits(['array-images-update'])

const arrayImages = ref([]);
const images = ref([]);

watch(arrayImages.value, ()=> {
    emit('array-images-update', arrayImages.value)
})


const seleccionarImagenes = (event) => {
    let files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        arrayImages.value.push(files[i]);
        let reader = new FileReader();
        reader.onloadend = function () {
            images.value.push(reader.result);
        }
        reader.readAsDataURL(files[i]);
    }
}

const eliminarImagen = (index) => {
    images.value.splice(index, 1);
    arrayImages.value.splice(index, 1)
}


</script>

<style scoped>

.preview-images{
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