<template>
    <section class="container shadow rounded my-4 p-2">
        <h3 class="text-center">Tu pedido se ha procesado con éxito</h3>
        <pre>{{ pedidoInfo }}</pre>
        <pedidoDetails :pedido-details="pedidoInfo"></pedidoDetails>
    </section>

</template>

<script setup>

const props = defineProps({
    pedidoInfo : Object
})
</script>