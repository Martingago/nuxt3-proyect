<template>
    <!-- Tabla con el listado de elementos categoria -->
    <section class="d-flex flex-column gap-3">
        <table v-if="loading">
            <thead>
                <tr>
                    <th>Opciones</th>
                    <th>{{ props.text_referencia }}</th>
                    <th>Descripcion {{ props.text_referencia }}</th>
                </tr>
            </thead>
            <tbody>
                <!-- Agrega filas aquí -->
                <tr v-for="item in data" :key="item.id" class="elemento-data">
                    <td class="options"><button class="button" data-bs-toggle="modal" data-bs-target="#deleteModal"
                            @click="handleClick(item, 'delete')">
                            <font-awesome-icon :icon="['fas', 'trash-can']" />
                        </button>
                        <button class="button" data-bs-toggle="modal" data-bs-target="#addModal"
                            @click="handleClick(item, 'edit')">
                            <font-awesome-icon :icon="['fas', 'pen']" />
                        </button>
                    </td>
                    <td class="name">{{  item.nombre }}</td>
                    <td class="descripcion">{{ item.descripcion }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else class="d-flex flex-column m-2 justify-content-cetner align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p>Cargando datos...</p>

        </div>
    </section>
</template>

<script setup>

const data = ref({});
const loading = ref(false);
const selectedItem = ref({});

const props = defineProps({
    text_referencia: String,
    referencia_datos: String,
})

const emit = defineEmits(['emit-data']);

const cargarDatos = async () => {
    data.value = await getDataFromStore(props.referencia_datos);
    loading.value = true;
}

cargarDatos();

const handleClick = (object, value) => {
    selectedItem.value = {
        text_referencia: props.text_referencia,
        referencia_datos: props.referencia_datos,
        action: value,
        form_data: object
    }
    emit('emit-data', selectedItem.value)
}


</script>

<style scoped>
table {
    border: 2px solid black
}

tr{
    display: grid;
    grid-template-columns: 80px 130px auto;
    height: 30px;
}
/* Cabecera */
tr th{
    display: flex;
    justify-content: left;
    padding: .2rem;
    align-items: center;
    text-transform: capitalize;
    font-size: .8rem;
}
/* Elementos */
tr td{
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: .8rem;
    line-height: .9rem;
    overflow: hidden;
    white-space:  nowrap;
    text-overflow: ellipsis;
    padding: .2rem;
    width: 100%;
}

.options{
    gap: 3px;
}
.button{
    display: inline-flex;
    width: 25px;
    height: 25px;
    justify-content: center;
    align-items: center;
}

table td,
th {
    border: 1px solid black
}


</style>