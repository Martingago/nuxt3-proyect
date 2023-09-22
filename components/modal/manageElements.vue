<template>
    <div class="modal modal-lg fade" data-bs-backdrop="static" id="addModal" tabindex="-1" aria-labelledby="addModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">  
                    <forms-addFormData v-if="dataObject.referencia_datos != 'productos'" :getData="dataObject" @toast-msg="actualizarDatos"></forms-addFormData>
                    <forms-uploadProduct v-if="dataObject.referencia_datos === 'productos' " :getData="dataObject"></forms-uploadProduct>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['toast-msg']);
const actualizarDatos = (msg) => {
    emit('toast-msg', msg)
}

const props = defineProps({
    dataObject: Object,
})
</script>

<style scoped>
.btn-primary {
    width: fit-content;
}
</style>