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
                    <p class="text-center mb-0 fs-5"><span class="fl">{{ selectedItem.text_referencia }}</span>: <span
                            class="category-selected">"{{
                                selectedItem.form_data?.nombre || selectedItem.form_data?.nombre_articulo }}" </span> con identificador: <span class="id-selected">{{
        selectedItem.form_data?.id }}</span> será eliminado.</p>
                    <p v-if="selectedItem.form_data?.nombre" class="text-center fs-5">Esto puede afectar a aquellos productos que estén vinculados con la
                        {{ selectedItem.text_referencia }} seleccionada</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar y salir</button>
                    <button type="button" class="btn btn-danger" @click="handleAccept">Continuar y eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['toast-msg'])

const props = defineProps({
    selectedItem: {
        type: Object,
        required: true
    }
})


const delmsg = ref("");

const handleAccept = () => {
    const id = props.selectedItem.form_data.id; //id del documento
    const coleccion = props.selectedItem.referencia_datos; //referencia de la coleccion
    let nombre;
    if(props.selectedItem.action === 'delete-product' ){
        //elimina las imagenes del storage:
        nombre = props.selectedItem.form_data.nombre_articulo;
        const idImagenes = props.selectedItem.form_data.imagenes_producto.id;
        const referencia = 'productos_images/'+idImagenes;
        console.log("eliminando imagenes...")
        deleteAllContentFromReference(referencia)
    }else{
        nombre = props.selectedItem.form_data.nombre;
    }
    console.log("eliminando datos...")
    deleteFromStore(coleccion, id)
    //Cerrar ventana
    const myModalEl = document.getElementById('deleteModal');
    const { $bootstrap } = useNuxtApp();
    const modal = $bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
    delmsg.value = `${nombre} ha sido eliminado`
    emit('toast-msg', delmsg.value);
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

.fl {
    text-transform: capitalize;
}
</style>