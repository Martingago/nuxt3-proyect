<template>
    
<div id="carouselExampleIndicators" class="carousel slide p-3" data-bs-ride="carousel">
    <div class="carousel-indicators my-0">
        <button v-for="(image, index) in arrayImagenes" :key="image" type="button" data-bs-target="#carouselExampleIndicators" :data-bs-slide-to="index" class="active bg-dark"
            aria-current="true" aria-label="Slide 1"></button>
    </div>
    
    <div class="carousel-inner">
        <div v-for="(image, index) in arrayImagenes" :key="index" class="carousel-item" :class="{active : index === 0}">
            <img :src="image.url" class="d-block w-100"
                alt="imagen de ejemplo">
        </div>
    </div>
    <!-- botones -->
    <button class="carousel-control-prev btn-hover-color-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="icon-carousel carousel-control-prev-icon rounded bg-dark m-3" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="icon-carousel carousel-control-next-icon rounded bg-dark m-3" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

</template>

<style scoped>

    img {
    aspect-ratio: 1 /1;
    object-fit: contain;
}

button:hover{
    background-color: transparent;
    
}
</style>

<script setup>

const arrayImagenes = ref([])
const props = defineProps({
    productImages: Object,
    required: true
})

const convertToArray = () => {
    const imagenes = props.productImages.views
    arrayImagenes.value.push(props.productImages.portada)
    imagenes.forEach(element => {
        arrayImagenes.value.push(element)
    });
}
convertToArray();
</script>