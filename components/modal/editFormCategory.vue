<template>
    <div class="modal modal-lg fade" data-bs-backdrop="static" id="editCategoryModal" tabindex="-1" aria-labelledby="editCategoryModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <forms-addCategoryProduct action="edit" title="Editar categoría de producto" buttonText="Actualizar categoría" :dataCategory="selectedItem"></forms-addCategoryProduct>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    selectedItem : Object,
    required: true
})

</script>