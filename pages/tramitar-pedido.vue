<template>
    <productosPedido v-if="!usePedidos.pedido_complete"></productosPedido>
    <div v-else >
        <confirm-pedido :pedido-info="usePedidos.pedido"></confirm-pedido>
        <div class="container d-flex my-4 justify-content-end">
            <NuxtLink to="/" class="d-flex justify-contend-end btn btn-dark">Volver al inicio</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useStorePedidos } from '~~/store/pedidosUsuarios';
const usePedidos = useStorePedidos();

useHead(
    {
        title: "BRAVUS - Tramitar pedido",
        meta: [
            {
                name: 'description',
                content: 'BRAVUS: Página para tramitar tu pedido Online'
            }

        ]
    }    
);


</script>