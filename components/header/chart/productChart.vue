<template>
    <div v-if="loading" class="spinner-container d-flex flex-column justify-content-center align-items-center">
        <div  class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <p>Cargando...</p>
    </div>
    <figure v-else class="item-chart d-flex flex-column justify-content-center w-100  mb-0">
        <div class="product-container d-flex flex-column justify-content-center mb-1 p-1"
        title="Ver producto" 
        @mouseenter="hover = true" @mouseleave="hover = false"
        :class="{ 'shadow rounded':hover }"
        >
            <img class="img-product-chart img-fluid w-75 m-auto" :src="productData.imagenes_producto.portada.url"
                :alt='`imagen del producto ${productData.nombre_articulo}`'
                :title="`Producto añadido en el carrito: ${productData.nombre_articulo}`"
                loading="lazy">

            <p class="text-center w-100 h-100 mb-0">
                <strong>{{ productData.precio_venta }}€</strong>
            </p>
        </div>
        <figcaption class="d-flex gap-1 justify-content-between mx-2 my-1">
            <p class="d-flex gap-2 align-items-center mb-0">
                Cant:
                <em class="count border border-1 rounded text-center shadow">{{ item.count }}</em>
            </p>
            <button class="btn p-0 px-2 border border-1 rounded" @click="handleDeleteChart(item)">
                Eliminar
            </button>
        </figcaption>
    </figure>
</template>

<script setup>
import { useUserStore } from '~~/store/authUser';
const userStore = useUserStore();

const props = defineProps({
    item: Object,
});

const totalProducto = ref(Number);
const loading = ref(true);
const hover = ref(false);

const productData = ref({}); //datos del producto
onMounted(async () => {
    productData.value = await getSingleDocumentData("productos", props.item.productID);
    loading.value = false;
    totalProducto.value = Number(productData.value.precio_venta) * props.item.count;
})

const handleDeleteChart = async (producto) => {
    let carrito = userStore.info.user_chart.products_in_chart;
    if(producto.count >0){
        console.log("quitando 1")
        producto.count -= 1;
    }
  if (producto.count === 0) {
    const idRemove = producto.productID;
    carrito = carrito.filter((producto) => producto.productID !== idRemove); //Se elimina del array el producto con count  de 0
  }
  userStore.info.user_chart.products_in_chart = carrito;
  //Actualizar los datos de firebase con el nuevo array:
 
  await updateDataAtribute(userStore.info.userID, userStore.info.user_chart.products_in_chart);
};

</script>
<style scoped>

.item-chart{
    user-select: none;
}
.count {
    width: 36px;
}
.img-product-chart{
    aspect-ratio: 1 /1;
}

.product-container{
    cursor: pointer;
}

.spinner-container{
    height: 205.75px;
}

</style>