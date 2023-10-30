<template>
    <section class="container my-4">
        <h3 class="text-center mb-4">Tu pedido se ha procesado con éxito</h3>
        <pedidoDetails :pedido-details="pedidoInfo"></pedidoDetails>
    </section>

</template>

<script setup>

const props = defineProps({
    pedidoInfo : Object
})
</script>