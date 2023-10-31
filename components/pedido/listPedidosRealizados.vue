<template>
    <ol>
        <li v-for="pedido in userStore.user_pedido" :key="pedido.codigo_pedido" class="mb-3">
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

</template>
<script setup>
import { useUserStore } from "~~/store/authUser";

const userStore = useUserStore();

onMounted(()=> {
    if(userStore?.info?.user_orders){
        getPedidosInfo(userStore.info.user_orders, userStore.user_pedido)
    }
    
})

watch(()=> userStore.info,()=> {
    if(userStore.auth){
        getPedidosInfo(userStore.info.user_orders, userStore.user_pedido);
    }
    
})

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