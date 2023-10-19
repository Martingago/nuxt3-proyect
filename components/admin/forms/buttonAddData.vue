<template>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal" @click="emitValue">Añadir {{
        text_referencia }}</button>
</template>

<script setup>

const emits = defineEmits(['emit-value'])

const props = defineProps({
    text_referencia: String,
    action: String,
    referencia_datos: String
})

const emitValue = () => {
    emits('emit-value', props)
}

</script>