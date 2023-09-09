<template>
    <form @submit.prevent class="d-flex flex-column container shadow rounded gap-3 p-3">
        <h3 class=" text-center">Añadir producto</h3>
        <div class="d-flex flex-column">
            <label for="nombreProducto">Nombre del producto</label>
            <input type="text" name="nombre" id="nombreProducto" placeholder="Nombre del producto">
        </div>
        <div class="d-flex flex-column">
            <label for="etiquetaProducto">Etiqueta del producto</label>
            <select class="form-select" aria-label="Formulario de selección múltiple de clases de producto"
                name="etiquetaProducto" id="etiquetaProducto" multiple>
                <option v-for="categoria in dataCategorias" :key="categoria" :value="categoria.id">{{
                    categoria.nombre_categoria }}</option>
            </select>
        </div>
        <div class="d-flex flex-column">
            <label for="descripcionProducto">Descripción del producto</label>
            <textarea id="descripcionProducto" cols="1" rows="4"></textarea>
        </div>
        <!-- Precios -->
        <div class="alert alert-warning">
            <p>Atención! Ingrese el precio del producto en el siguiente formato:</p>  
            <p>- Utilice "." para separar los decimales. <br>
                - No incluya ningún carácter para las unidades de millar.</p>
            
                
    
                <p>Ejemplo válido: 499.99 (para cuatrocientos noventa y nueve con noventa y nueve céntimos)</p>
        </div>
        <div class="d-flex justify-content-between">
            <div class="d-flex flex-column">
                <label for="precioProducto">Precio venta (PVP)</label>
                <span class="d-flex flex-row justify-content-center align-items-center gap-1">
                    <input type="text" @keypress="filterNonNumeric" name="precioProducto" id="precioProducto"
                        class="text-end" v-model="precioProducto">
                    <p class="m-auto fw-600 fs-5">€</p>
                </span>
            </div>

            <div class="d-flex gap-2">
                <div class="d-flex flex-column">
                    <label for="descuentoProducto">Inluye descuento</label>
                    <select v-model="descuentoProducto" @change="hasDiscount" name="decuentoProducto"
                        id="descuentoProducto">
                        <option value="false">NO</option>
                        <option value="true"> SI</option>
                    </select>
                </div>
                <div class="d-flex flex-column">
                    <div class="d-flex flex-column">
                        <label for="porcentajeDescuento">Porcentaje de descuento</label>
                        <span class="d-flex gap-1 fw-700">
                            <input type="number" name="porcentajeDescuento" id="precioProducto"
                                v-model="porcentajeDescuento" placeholder="25">
                            <p class="m-auto fs-5 fw-600">%</p>
                        </span>
                    </div>
                    <div class="d-flex flex-column">
                        <label for="precioAnterior">Precio anterior</label>
                        <span class="d-flex gap-1"><input v-model="precioAnterior" type="number" name="precioAnterior"
                                id="precioAnterior">
                            <p class="m-auto fs-5 fw-600">€</p>
                        </span>
                    </div>

                    <button :disabled="!booleanDiscount" class="btn btn-primary p-0 mt-2" @click="calcularPVP">Calcular
                        PVP</button>
                </div>
            </div>

        </div>

        <div class="d-flex flex-column">
            <label for="stockProducto">Stock del artículo</label>
            <input type="number" name="stockProducto" id="stockProducto">
        </div>

    </form>
</template>

<script setup>

const precioProducto = ref();
const porcentajeDescuento = ref();
const precioAnterior = ref();

//obtener datos de las categorias:
const dataCategorias = ref([]);

//determinar si tiene descuento o no:

const descuentoProducto = ref('false');
const booleanDiscount = ref(false)
const hasDiscount = () => {
    booleanDiscount.value = descuentoProducto.value === 'true';
}


onMounted(async () => {
    dataCategorias.value = await getDataFromStore('categoria_productos');
})


const calcularPVP = () => {
    const descuento = 1 - porcentajeDescuento.value / 100;
    const calculoDescuento = descuento * precioAnterior.value;
    precioProducto.value = calculoDescuento;
    console.log(precioProducto.value)
}

const filterNonNumeric = (event) => {
    // Verificar si el valor ingresado es numérico
    if (!/\d/.test(event.key) && event.key !== '.') {
        // Si el valor no es numérico, evitar que se ingrese en el input
        event.preventDefault();
    }
}

</script>


<style scoped>
form {
    max-width: 800px;
}

.fw-600 {
    font-weight: 600;
}

#descripcionProducto {
    resize: none;
}</style>