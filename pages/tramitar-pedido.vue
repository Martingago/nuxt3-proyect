<template>
    <productosPedido v-if="!usePedidos.pedido_complete" :key="'form' + usePedidos.pedido_complete"></productosPedido>
    <confirm-pedido v-else :pedido-info="usePedidos.pedido" :key="'complete' + usePedidos.pedido_complete"></confirm-pedido>
</template>

<script setup>
import { useStorePedidos } from '~~/store/pedidosUsuarios';

const usePedidos = useStorePedidos();
console.log(usePedidos.pedido)

</script>