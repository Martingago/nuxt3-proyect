<template>
    <!-- Modal Eliminar datos-->
    <div class="modal modal-lg fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 text-center w-100" id="exampleModalLabel">Borrar datos</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <h4 class="w-100 text-center fs-2 mb-3"> ATENCIÓN</h4>
                    <p class="text-center mb-0 fs-5">Categoria: <span class="category-selected">"{{
                        selectedItem.nombre_categoria }}" </span> con identificador: <span class="id-selected">{{
        selectedItem.id }}</span> será eliminada.</p>
                    <p class="text-center fs-5">Esto puede afectar a aquellos productos que estén vinculados a ésta
                        categoría</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar y salir</button>
                    <button type="button" class="btn btn-danger" @click="handleAccept">Continuar y eliminar</button>
                </div>
            </div>
        </div>
    </div>
    <modal-toast :dataNotification="selectedItem"></modal-toast>
</template>

<script setup>

const props = defineProps({
    selectedItem: {
        type: Object,
        required: true
    }
})

const handleAccept = () => {
    const id = props.selectedItem.id;
    eliminarCategoriaProducto(id);
    //Cerrar ventana
    const myModalEl = document.getElementById('deleteModal');
    const { $bootstrap } = useNuxtApp();
    const modal = $bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    //mostrar toast
    var toastEl = document.getElementById('liveToast');
    var toast = new $bootstrap.Toast(toastEl);
    toast.show();
}

</script>

<style scoped>
.id-selected {
    font-weight: 600;
    text-decoration: underline;
    color: rgb(56, 56, 56)
}

.category-selected {
    font-weight: 600;
    text-transform: uppercase;
}
</style>