<template>
    <div class="data-product d-flex flex-column p-2 justify-content-center align-itemsm-md-center align-items-lg-left">
        <h2 class="text-uppercase fw-bold fs-1">{{ dataProduct.nombre_articulo }}</h2>
        <p class="fs-5">{{ dataProduct.descripcion_articulo }}
        </p>
        <div class="price-data-product">
            <p class="fs-5 fw-bold">{{ precioTotal + "€" }}</p>
            <ContadorItemsBtn class="btn-cant" @update:count="calculo"
                :stock="dataProduct.stock_articulo"></ContadorItemsBtn>
            <button class="text-light" :disabled="blockBtn" @click="manageItemChart(dataProduct)">Añadir al carrito</button>
            

        </div>
        <div class="alert-container mt-2">
                <p v-if="blockBtn" class="alert alert-danger w-100 m-0 p-0">Has alcanzado el límite de Stock</p>
            </div>
    </div>
</template>

<script setup>
import { useUserStore } from "~~/store/authUser";
const userStore = useUserStore();
const props = defineProps({
    dataProduct: Object,
    required: true
})

const precio = props.dataProduct.precio_venta; //precio del producto
const count = ref(1);
const precioTotal = ref(precio);

const blockBtn = ref(false);
const calculo = (value) => {
    count.value = value;
    precioTotal.value = precio * value;
}

const manageItemChart = async (producto) => {
    if(userStore.auth === true){
        blockBtn.value = await addProductToChart(producto, count.value);
    }else{
        const router =  useRouter();
        router.push("/login");
    }
    
}

</script>



<style scoped>
.price-data-product {
    display: grid;
    grid-template-columns: auto auto;
}

.price-data-product p,
.price-data-product .alert-container {
    grid-column: 1 / 3;
}

.alert-container {
    height: 26px;
}

@media screen and (max-width: 992px) {

    .price-data-product p,
    .price-data-product .alert-container {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        text-align: right;
    }

    .price-data-product .btn-cant{
       
        grid-row: 1 / 2
    }
    .price-data-product button  {
        margin-top: 1rem;
        grid-column: 1 / -1;
    }
}

button {
    background-color: rgb(230, 150, 75);
}

button:disabled {
    background-color: rgb(155, 155, 155);
    color: black;
}
</style>



