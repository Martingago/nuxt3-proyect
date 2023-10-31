<template>
    <div class="d-flex flex-column align-items-center" v-if="userStore.user_pedido.length">
        <ol >
            <li v-for="pedido in userStore.user_mostrado" :key="pedido.codigo_pedido" class="mb-3">
                <article class="border border-2 rounded p-2">
                    <div class="d-flex justify-content-between">
                        <p>Código del pedido: <span class="fw-600">{{ pedido.codigo_pedido }}</span></p>
                        <p>Fecha del pedido: <span class="fw-600">{{ pedido.formattedDate}}</span></p>
                    </div>
                    <p class="mb-1">Dirección de envío: <span class="fw-600">{{ pedido.direccion_pedido }}</span></p>
                    <p class="mb-1">Envíado a: <span class="fw-600">{{ pedido.nombre }}</span></p>
                    <p class="mb-2">Productos:</p>
                    <ul>
                        <li v-for="producto in pedido.productos_pedido" :key="producto.productID">
        
                            <div class="d-flex">
                                <p class="flex-grow-1 mb-0 fw-600 lh-1">{{ producto?.nombre_producto }}</p>
                                <p class="mb-0 m-end text-end lh-1">Precio unitario: <span class="fw-600">{{ producto?.price }}€</span></p>
                                <p class="mb-0 text-end lh-1">Cantidad: <span class="fw-600">x{{ producto?.count }}</span></p>
                            </div>
                            <hr class="my-1">
        
                        </li>
                    </ul>
                    <p class="mb-0 d-flex"><span class="flex-grow-1">Total:</span> <span class="fw-600">{{ pedido.precio_total }}€</span></p>
                </article>
            </li>
        </ol>
        <button class="w-auto btn btn-dark" :disabled="start <= 0" @click="cargarPedidos">Cargar más</button>
    </div>
    <p v-else class="text-center fs-5 mt-3"> Aún no has realizado ningún pedido</p>

</template>
<script setup>
import { useUserStore } from "~~/store/authUser";

const userStore = useUserStore();
const start = ref(0);
;

onMounted(async ()=> {
    if(userStore.auth && userStore.user_pedido.length !== userStore.user_mostrado.length){
        console.log("cambio en los productosoosss");
        userStore.user_mostrado = await getPedidosInfo( userStore.user_pedido, userStore.user_mostrado);
    }
})

watch(()=> userStore.info,async ()=> {
    console.log("primera carga")
    if(userStore.auth && userStore.user_pedido.length === 0 && userStore.info.user_orders.length >0){
        start.value = userStore.info.user_orders.length -1;
        start.value = await getPedidosInfoIndex(userStore.info.user_orders, userStore.user_pedido, start.value , 5);
        userStore.user_mostrado = userStore.user_pedido;
        
    } 
})


const cargarPedidos = async () => {
    if(start.value >=0){
        start.value = await getPedidosInfoIndex(userStore.info.user_orders, userStore.user_pedido, start.value , 5);
        userStore.user_mostrado = userStore.user_pedido;
    }
    
}


</script>
<style scoped>

.m-end{
    margin-right: .5rem;
}

.lh-1{
    line-height: 1rem;
}
.fw-600{
    font-weight: 600;
}
</style>