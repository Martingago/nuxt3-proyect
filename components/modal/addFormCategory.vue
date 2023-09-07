<template>
    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addCategoryModal"> Añadir categoria</button>

    <div class="modal modal-lg fade" data-bs-backdrop="static" id="addCategoryModal" tabindex="-1"
        aria-labelledby="addCategoryModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <forms-addCategoryProduct action="add" title="Añadir categoría de producto"
                        buttonText="Añadir categoría" @toast-msg="actualizarDatos"
                        :dataCategory="selectedItem"></forms-addCategoryProduct>
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
    selectedItem: Object,
    required: true
})

</script>

<style scoped>

.btn-primary{
    width: fit-content;
}
</style>