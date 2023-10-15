<template>
    <article  :class="{ 'shadow border': showBtn || isSmallScreen }"
        @mouseenter="showBtn = true" @mouseleave="showBtn = false"
        class="product-article d-flex flex-column p-2 rounded position-relative">
        <div @click="visitProductPage(datoProducto.slug)">
            <div class="img-container">
                <nuxtImg class="img-fluida " :src="datoProducto.imagenes_producto.portada?.url"
                loading="lazy"
                    :alt="'Producto de la tienda audiophile: ' + datoProducto.nombre_articulo"
                     width="222" heigth="222"
                    quality="10" />
            </div>
            <hr class="my-0">
            <h5 class="title-product d-flex justify-content-center align-items-center mb-1">{{ datoProducto.nombre_articulo }}
            </h5>
            <h6 class="brand-product mb-0 text-sm-center">{{ datoProducto.nombre_marca }}</h6>
            <div class="d-flex gap-sm-0 gap-md-2 flex-column flex-md-row justify-content-center">
                <p class="actual-prize mb-0 text-center" :class="{ 'high-text': datoProducto.descuento }"> {{
                    datoProducto.precio_venta }}€</p>
                <div class="d-flex gap-2 justify-content-center align-items-center" v-if="datoProducto.descuento">
                    <p class="previus-prize" v-if="datoProducto.precio_anterior">{{ datoProducto.precio_anterior }}€</p>
                    <p class="nametag-discount">-{{ datoProducto.porcentaje_descuento }}%</p>
                </div>
            </div>
            <div class="last-units-container">
                <p v-if="datoProducto.stock_articulo <= 10" class="text-center mb-0 last-units">Últimas unidades</p>
            </div>
        </div>
        <div class="container-btn mt-2" v-if="!isSmallScreen">
            <button v-if="showBtn" :disabled="disableBtn" @click="manageItemToChart($event, datoProducto)" class="btn btn-dark w-100" aria-label="Añadir producto al carrt">Añadir al carrito</button>
        </div>
        <p v-if="disableBtn" class="limit-stock alert alert-danger text-center position-absolute">Límite de stock alcanzado</p>
    </article>
</template>

<script setup>
const disableBtn = ref(false); //desctiva el boton cuando se llega al stock máximo
const showBtn = ref(false);
const props = defineProps({
    datoProducto: {
        type: Object
    }
})

const visitProductPage = (producto) => {
    navigateTo(`/productos/${producto}`)
}

const manageItemToChart = async (event, producto) => {
    event.stopPropagation();
    disableBtn.value =  await addProductToChart(producto, 1);

}
const isSmallScreen = ref(false);
const updateWidth = () => {
    isSmallScreen.value = window.innerWidth < 1110;
}


onMounted(async () => {
    window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
})




</script>

<style scoped>
.product-article {
    width: 100%;
    cursor: pointer;
    border: 1px solid transparent;
}

.title-product {
    height: 48px;
    font-size: .9rem;
    line-height: 1rem;
    color: var(--color-light);
}

.brand-product {
    font-size: .8rem;
    text-transform: uppercase;
    font-weight: 600;
}

.img-container {
    width: 100%;
    aspect-ratio: 1 / 1;
}

.img-fluida {
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
}

.actual-prize {
    padding: .2rem;
    font-weight: 600;
    font-size: 1.2rem;
}

.previus-prize {
    position: relative;
    color: var(--color-light);
    padding: .2rem;
    font-weight: 600;
    margin-bottom: 0;
}

.high-text {
    color: var(--color-lightPink);
}

.previus-prize::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: var(--color-light);
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%) rotateZ(-20deg);
    z-index: 1;
}

.nametag-discount {
    color: white;
    font-weight: 700;
    font-size: 0.9rem;
    background-color: var(--color-lightPink);
    padding: .2rem;
    text-align: center;
    width: 50px;
    margin-bottom: 0;
}

.container-btn {
    height: 38px
}

.last-units-container {
    position: relative;
    height: 19.19px;
}

.last-units {
    font-size: .8rem;
    font-weight: 600;
    color: var(--color-lightPink)
}

.limit-stock{
    margin: 0;
    padding: 0;
    width: 95%;
    top: 3px;
    right: 50%;
    transform: translateX(50%);
}


@media screen and (max-width: 900px) {
    .title-product {
        font-size: .8rem;
    }

    .last-units-container {
        position: absolute;
        width: 100%;
        right: 50%;
        transform: translateX(50%);
    }

    .last-units {
        background-color: rgba(197, 196, 196, 0.466);
        backdrop-filter: blur(2px);
    }

    .actual-prize {
        padding: 0;
    }

    .previus-prize {
        font-size: .8rem;
        padding: 0;
    }

    .nametag-discount {
        font-size: .7rem;
        padding: .1rem;
    }

}

@media screen and (max-width: 420px) {

    .title-product {
        font-size: .7rem;
    }
    .last-units {
        font-size: .7rem;
    }

}

@media screen and (max-width: 369px) {
    .brand-product{
        text-align: center;
    }
}

</style>
