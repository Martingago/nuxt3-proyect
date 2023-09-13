<template>
    <article @click="visitProductPage(datoProducto.slug)"
    :class="{'shadow border': showBtn}"

    @mouseenter="showBtn = true"  @mouseleave="showBtn = false" class="product-article d-flex flex-column p-2 rounded">
        <div class="img-container">
            <img class="img-fluida img-fluid" loading="lazy" :src="datoProducto.imagenes_producto.portada">
        </div>
        <hr class="my-0">
        <h5 class="title-product d-flex justify-content-center align-items-center mb-1">{{datoProducto.nombre_articulo }}</h5>
        <h6 class="brand-product mb-0">{{ datoProducto.marca }}</h6>

        <div class="d-flex gap-2">
            <p class="actual-prize mb-0" :class="{'high-text': datoProducto.descuento}" > {{ datoProducto.precio_venta }}€</p>
            <div class="d-flex gap-2 justify-content-center align-items-center" v-if="datoProducto.descuento">
                <p class="previus-prize mb-0" v-if="datoProducto.precio_anterior">{{ datoProducto.precio_anterior }}€</p>
                <p class="nametag-discount mb-0">-{{ datoProducto.porcentaje_descuento }}%</p>
                
            </div>
        </div>
        
        <div class="container-btn mt-2">
            <button  v-if="showBtn" @click="addToChart" class="btn btn-dark w-100">Añadir al carrito</button>
        </div>
    </article>
</template>

<script setup>

const showBtn = ref(false);
const props = defineProps({
    datoProducto : {
        type: Object
    }
})

const visitProductPage = (producto) => {
    navigateTo(`/productos/${producto}`)
}

const addToChart = (event) => {
    event.stopPropagation();
    console.log("añadiendo al carrito!")
}



</script>


<style scoped>
.product-article{
    min-width: 160px;
    width: 100%;
    max-width: 240px;
    cursor: pointer;
    border: 1px solid transparent;
}

.title-product{
    height: 48px;
    font-size: .9rem;
    line-height: 1rem;
    color: lightslategray;
}

.brand-product{
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 600;
}



.img-container{
    width: 100%;
    aspect-ratio: 1 / 1;
}

.img-fluida{
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
}


.actual-prize{
    padding: .2rem;
    font-weight: 600;
    font-size: 1.2rem;
}

.previus-prize{
    position: relative;
    color: lightslategray;
    padding: .2rem;
    font-weight: 600;
}
.high-text{
    color: rgb(172, 53, 53);
}

.previus-prize::after{
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: lightslategray;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotateZ(-20deg);
    z-index: 1;
}

.nametag-discount{
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    background-color: rgb(252, 112, 112);
    padding: .2rem;
    text-align: center;
    width:50px;
}

.container-btn{
    height: 38px
}

</style>
