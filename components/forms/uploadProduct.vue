<template>
    
    <form @submit.prevent="subirProducto" class="d-flex flex-column container shadow rounded gap-3 p-3">
        <h3 class=" text-center">Añadir producto</h3>
        <fieldset class="d-flex flex-column gap-2 bg-light rounded p-2">
            <legend class="text-center">Datos principales</legend>
            <div class="d-flex flex-column">
                <label for="nombreProducto">Nombre del producto</label>
                <input type="text" required v-model="datos_articulo.nombre_articulo" name="nombre" id="nombreProducto"
                    placeholder="Nombre del producto">
            </div>
            <!-- Etiqueta del producto -->
            <div class="d-flex flex-column">
                <label for="etiquetaProducto">Etiqueta del producto | <span class="help-info">Ctrl + click para selección
                        múltiple</span> |</label>
                <select class="form-select" aria-label="Formulario de selección múltiple de clases de producto"
                    name="etiquetaProducto" id="etiquetaProducto" v-model="datos_articulo.etiquetas_articulo" multiple
                    required>
                    <option v-for="categoria in dataCategorias" :key="categoria.id" :value="categoria.id">{{
                        categoria.nombre }}</option>
                </select>
            </div>
            <!-- Descripcion del producto -->
            <div class="d-flex flex-column">
                <label for="descripcionProducto">Descripción del producto</label>
                <textarea id="descripcionProducto" required cols="1" rows="4"
                    v-model="datos_articulo.descripcion_articulo"></textarea>
            </div>
            <!-- Marca del producto -->
            <div class="d-flex flex-column">
                <label for="marcaProducto">Marca del producto</label>
                <select class="form-select" aria-label="Sección de seleccion de Marca de producto" name="marcaProducto"
                    id="marcaProducto" v-model="datos_articulo.marca" required>
                        <option v-for="marca in dataBrands" :key="marca.id" :value="marca.id">{{ marca.nombre }}</option>
                </select>
            </div>
        </fieldset>

        <!-- Características -->
        <fieldset class="d-flex flex-column p-2 gap-1 rounded bg-light">
            <legend class="text-center">Caracteristicas del producto</legend>
            <div v-for="(caracteristica, index) in datos_articulo.caracteristicas_articulo" :key="index"
                class="d-flex gap-2">
                <input type="text" class="form-control" v-model="caracteristica.caracteristica" required
                    placeholder="Añadir característica" />
                <button @click.prevent="store.eliminarCaracteristica(index)" class="btn btn-danger">Eliminar</button>
            </div>
            <button @click.prevent="store.agregarCaracteristica" class="btn btn-primary  mt-2 mx-auto">Añadir Característica</button>
        </fieldset>

        <fieldset class="d-flex flex-column p2- bg-light">
            <legend class="text-center">Imágenes del producto</legend>
            <FormsUploadImage @portada-image-update="store.hanldePortadaImage"></FormsUploadImage>
            <FormsUploadArrayImages @array-images-update="store.handleArrayImages"></FormsUploadArrayImages>

        </fieldset>

        <fieldset class="d-flex flex-column gap-2 rounded bg-light p-2">
            <!-- Precios -->
            <div class="alert alert-warning">
                <p>Atención! Ingrese el precio del producto en el siguiente formato:</p>
                <p>- Utilice "." o "," para separar los decimales. <br>
                    - No incluya ningún carácter para las unidades de millar.</p>
                <p>Ejemplo válido: 499.99 (para cuatrocientos noventa y nueve con noventa y nueve céntimos) <br>
                    Ejemplo válido: 1499,99 (para mil cuatrocientos noventa y nueve con noventa y nueve céntimos)</p>
            </div>
            <div class="d-flex justify-content-between">
                <div class="d-flex flex-column">
                    <label for="precioProducto">Precio venta (PVP)</label>
                    <span class="d-flex flex-row justify-content-left align-items-left gap-1">
                        <input type="number" step="0.01" min="0.10" name="precioProducto" id="precioProducto"
                            class="text-end" required v-model="datos_articulo.precio_venta" @input="checkAlert">
                        <p class="m-left my-auto fw-600 fs-5">€</p>
                    </span>
                </div>
                <div class="d-flex gap-2">
                    <div class="d-flex flex-column">
                        <label for="descuentoProducto">Inluye descuento</label>
                        <select @change="store.hasDiscount($event)" name="decuentoProducto" id="descuentoProducto">
                            <option value="false">NO</option>
                            <option value="true"> SI</option>
                        </select>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <label for="porcentajeDescuento">Porcentaje de descuento</label>
                            <span class="d-flex gap-1 fw-700">
                                <input type="number" name="porcentajeDescuento" id="precioProducto"
                                    v-model="datos_articulo.porcentaje_descuento" min="1" max="99"
                                    :required="datos_articulo.descuento" :disabled="!datos_articulo.descuento">
                                <p class="m-auto fs-5 fw-600">%</p>
                            </span>
                        </div>
                        <div class="d-flex flex-column">
                            <label for="precioAnterior">Precio anterior</label>
                            <span class="d-flex gap-1"><input v-model="datos_articulo.precio_anterior"
                                    :required="datos_articulo.descuento" :disabled="!datos_articulo.descuento" type="number"
                                    step="0.01" min="0.01" name="precioAnterior" id="precioAnterior">
                                <p class="m-auto fs-5 fw-600">€</p>
                            </span>
                        </div>
                        <button :disabled="!datos_articulo.descuento" class="btn btn-primary p-0 mt-2"
                            @click.prevent="store.calcularPVP">Calcular
                            PVP</button>
                    </div>
                </div>
            </div>
            <div class="notification-area rounded">
                <p v-if="alertas.alerta.valor" class="alert alert-danger m-0 p-1">{{ alertas.alerta.mensaje }}</p>
            </div>
        </fieldset>

        <fieldset class="d-flex flex-column p-2 bg-light">
            <legend class="text-center">Unidades</legend>
            <label for="stockProducto">Stock del artículo</label>
            <input type="number" v-model="datos_articulo.stock_articulo" min="0" required name="stockProducto"
                id="stockProducto">
        </fieldset>
        <button class="btn btn-primary">Subir producto</button>
    </form>
</template>

<script setup>
import {manageProducts} from '~/store/manageProduct.js';

const store = manageProducts();
const datos_articulo = store.producto //Objeto del producto
const temp_images = store.temp_images; //imagenes temporales
const alertas = store.item_state;

onMounted(async () => {
    //Recibe las categorias de producto que existen
    dataCategorias.value = await getDataFromStore('categoria_productos');
    //recibe las marcas de producto que existen
    dataBrands.value = await getDataFromStore('marca_productos')
})

const props = defineProps({
    getData: Object
})

const emit = defineEmits(['toast-msg'])


watch(() => props.getData.form_data, (newVal) => {
    console.log("datos que se reciben:", props.getData.form_data)
    if (props.getData.action === 'edit' && newVal) {
        console.log("actualizar producto");
        datos_articulo.value.nombre_articulo = newVal.nombre_articulo
    }else{
        //Elimina los datos para que el formulario esté limpio
        console.log("noooo")
    }
})

//obtener datos de las categorias:
const dataCategorias = ref([]);
//obtener datos de las marcas:
const dataBrands = ref([]);
const alerta = ref(false);
const alertaUpdt = ref(false);

//comprueba alertas
const checkAlert = () => {
    if (datos_articulo.precio_venta <= 0) {
        alerta.value = true
    } else {
        alertaUpdt.value = false
        alerta.value = false
    }
}

const subirProducto = async () => {
    //salta alerta de error de precio
    if (datos_articulo.precio_venta < 1) {
        alerta.value = true;
    } else {
        //se produce un update en el precio en caso de que no se haya producido antes
        store.calcularPVP();
        if (alertaUpdt.value == true) {
            console.log("el producto se subirá con la siguiente alerta: Actualización de precio");

        }
        //se suben las imagenes
        const idImages = Date.now();
        const arrayImages = temp_images.temp_views;
        const imagenPortada = temp_images.temp_portada;
        datos_articulo.imagenes_producto.id = idImages;

        if (imagenPortada) {
            console.log("subiendo imagen principal...")
            const imageResult = await uploadMainImage("productos_images", idImages, imagenPortada);
            datos_articulo.imagenes_producto.portada = imageResult
        }
        if (arrayImages) {
            console.log("subiendo conjunto de imágenes...")
            const arrayResult = await uploadArrayImages("productos_images", idImages, arrayImages);
            datos_articulo.imagenes_producto.views = arrayResult;
        }
        store.slugTitle();
        console.log("datos para subir:", datos_articulo)
        uploadDatatoStore("productos", datos_articulo)
        const msg = `${datos_articulo.nombre_articulo} ha sido subido con éxito`;
        emit('toast-msg', msg)
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
}


.notification-area {
    width: 100%;
    height: 34px;
    background-color: rgba(247, 246, 246, 0.856);
}

.help-info {
    font-size: .8rem;
    color: rgb(48, 47, 47)
}

.fw-bold {
    text-decoration: bold;
}
</style>