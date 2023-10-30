<template>
    <div class="container-pedido-details">
        <article>
            <h3>Información envío</h3>
            <p>Nombre:</p>
            <p>{{ pedidoDetails.nombre }}</p>
            <p>Dirección:</p>
            <p>{{ pedidoDetails.direccion_pedido }}</p>
        </article>
        <article>
            <h3>Información del pedido</h3>
            <p>Fecha del pedido: {{ pedidoDetails.fecha_pedido }}</p>
            <p>Código del pedido: {{ pedidoDetails.codigo_pedido }}</p>
            <ul>
                <li v-for="producto in pedidoDetails.productos_pedido" :key="producto.productID">
                    <p>Producto: {{ producto.nombre_producto }}</p>
                    <p>Precio unitario: {{ producto.price }}</p>
                    <p>Cantidad: {{ producto.count }}</p>
                </li>
            </ul>
            <p>Total pedido: {{ pedidoDetails.precio_total }}</p>
            
        </article>
    </div>

</template>

<script setup>
const props = defineProps({
    pedidoDetails: Object
})

</script>