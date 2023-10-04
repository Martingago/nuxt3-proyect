<template>
    <form v-if="!loading" @submit.prevent="subirProducto" class="d-flex flex-column container shadow rounded gap-3 p-3">

        <pre>{{ datos_articulo.imagenes_producto }}</pre>
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
            <button @click.prevent="store.agregarCaracteristica" class="btn btn-primary  mt-2 mx-auto">Añadir
                Característica</button>
        </fieldset>
        <!-- Imágenes -->
        <fieldset class="d-flex flex-column p2- bg-light">
            <legend class="text-center">Imágenes del producto</legend>
            <FormsUploadImage @portada-image-update="hanldePortadaImage = $event"
                :main-image="datos_articulo.imagenes_producto.portada"></FormsUploadImage>
            <FormsUploadArrayImages @array-images-update="handleViewsImage = $event"
                :array-images="datos_articulo.imagenes_producto.views"></FormsUploadArrayImages>

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
    <!-- Spinner -->
    <div v-else class="loading position-relative">
        <div v-if="disabled" class="spinner-border m-auto " role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>
            <p class="alert alert-success mb-0">El producto se ha subido con éxito!</p>
        </div>
        <ul class="list-updates position-absolute">
            <li class="noti-msg" v-for="mensaje in uploadMsg" :key="mensaje">{{ mensaje }}</li>
        </ul>
        <button @click="clearData" class="btn btn-primary confirm-prod" :disabled="disabled">Aceptar</button>
    </div>
</template>

<script setup>
import { manageProducts } from '~/store/manageProduct.js';

const store = manageProducts();

store.initProducto(); //inicializado en 0 el producto
store.initTempImages(); //inicializado a 0 las imagenes temporales
const datos_articulo = ref(store.producto); //Objeto del producto (vacío)

//CONST
const hanldePortadaImage = ref(null); //manejo de la views de imagen de portada
const handleViewsImage = ref(null); //manejo de las views de imagenes

const alertas = store.item_state;
const loading = ref(false);
const uploadMsg = ref([]);
const disabled = ref(false);

const props = defineProps({
    getData: Object
})
onMounted(async () => {
    //Recibe las categorias de producto que existen
    dataCategorias.value = await getDataFromStore('categoria_productos');
    //recibe las marcas de producto que existen
    dataBrands.value = await getDataFromStore('marca_productos');

})

const emit = defineEmits(['toast-msg'])

watch(() => props.getData.form_data, (newVal) => {
    if (props.getData.action === 'edit' && newVal) {
        store.setProducto(newVal); //Establece los datos de store.producto
        datos_articulo.value = store.producto;
    } else {
        console.log("limpio")
        //Elimina los datos para que el formulario esté limpio
        store.initProducto();
        datos_articulo.value = store.producto;
    }
}, { immediate: true })


const dataCategorias = ref([]); //Obtener los datos de las categorias
const dataBrands = ref([]); //Obtener datos de las marcas:
const alerta = ref(false);
const alertaUpdt = ref(false);

//comprueba alertas
const checkAlert = () => {
    if (datos_articulo.value.precio_venta <= 0) {
        alerta.value = true
    } else {
        alertaUpdt.value = false
        alerta.value = false
    }
}

const subirProducto = async () => {
    disabled.value = true;
    uploadMsg.value = [];
    //salta alerta de error de precio
    if (props.getData.action === 'add') {
        loading.value = true;
        if (datos_articulo.value.precio_venta < 1) {
            alerta.value = true;
        } else {
            //se produce un update en el precio en caso de que no se haya producido antes
            store.calcularPVP();
            //se suben las imagenes
            const idImages = Date.now();
            datos_articulo.value.imagenes_producto.id = idImages; //ID de las imágenes


            //Sube imagen de portada
            if (hanldePortadaImage.value) {
                const imagenPortada = hanldePortadaImage.value.filePushImage.file;
                uploadMsg.value.push("subiendo imagen principal...");
                const imageResult = await uploadMainImage("productos_images", idImages, imagenPortada);
                datos_articulo.value.imagenes_producto.portada = imageResult;
            }
            //Sube conjunto de imágenes
            if (handleViewsImage.value) {
                const arrayImages = handleViewsImage.value.arrayPushImage;
                uploadMsg.value.push("Subiendo conjunto de imágenes...")
                const fileArrayImage = [];
                arrayImages.forEach(element => {
                    fileArrayImage.push(element.file); //Se carga en un array los File de cada imagen
                });

                const arrayResult = await uploadArrayImages("productos_images", idImages, fileArrayImage);
                datos_articulo.value.imagenes_producto.views = arrayResult; //En el objeto del producto se escriben los datos de las imagenes: url y path
            }
            store.slugTitle();
            uploadMsg.value.push("Subiendo datos de producto...");
            await uploadDatatoStore("productos", datos_articulo.value)
            const msg = `${datos_articulo.value.nombre_articulo} ha sido subido con éxito`;
            emit('toast-msg', msg);
            disabled.value = false;
        }
    }
    else if (props.getData.action === 'edit') {
        store.slugTitle();
        const { nombre_marca, ...datos_update } = datos_articulo.value; //Objeto limpio que se va a actualizar a la BBDD
        const idImages = datos_update.imagenes_producto.id; //Referencia para subir la futura imagen

        //Actualizar la imagen principal:
        console.log("valor de handle:", hanldePortadaImage.value)
        if (hanldePortadaImage.value) {
            console.log("ejecutando una edicion de imagen")

            //Se debe eliminar la imagen anterior:
            const fileAdd = hanldePortadaImage.value.filePushImage; //arhivo que se añade
            const fileDel = hanldePortadaImage.value.fileDeleteImage; //archivo que se elimina
            console.log("archivos para eliminar", fileDel)
            //Se comprueba que el archivo haya sido subido previamente a la BBDD
            if (fileDel && fileDel.registered === true) {
                deleteRefenceImage(fileDel.path);
            }
            //Se sube la imagen principal:
            if (fileAdd) {
                const imageResult = await uploadMainImage("productos_images", idImages, fileAdd.file); //sube la imagen a la BBDD
                datos_update.imagenes_producto.portada = imageResult;
            }
        }
        //actualizar conjunto de imágenes:
        console.log("valor de handle images:", handleViewsImage.value)
        if (handleViewsImage.value) {
            const arrFilesAdd = handleViewsImage.value.arrayPushImage;
            const arrFilesDelete = handleViewsImage.value.arrayDeleteObjetosImage;
            //elimina las imágenes
            if (arrFilesDelete.length > 0) {
                const arrDelReferences = [];
                console.log("Eliminando imágenes...");
                const prod_BBDD_img = datos_update.imagenes_producto.views;
                arrFilesDelete.forEach(element => {
                    if (element.registered === true) {
                        arrDelReferences.push(element.url); //referencia de la URL que permitia visualizar la imagen
                        deleteRefenceImage(element.path); //Se eliminan las imágenes
                    }
                });
                //TENGO QUE ACTUALIZAR LAS REFERENCIAS DE LAS IMAGENES EN EL OBJETO
                datos_update.imagenes_producto.views = eliminarDuplicados(prod_BBDD_img, arrDelReferences);


            }
            if (arrFilesAdd.length > 0) {
                console.log("subiendo nuevas imágenes...");
                const arrToPush = [] //Array de imágenes que se van a subir a la BBDD
                arrFilesAdd.forEach(element => {
                    if (element.registered === false) {
                        arrToPush.push(element.file);
                        console.log(element.file)
                    }
                });
                if (arrToPush.length > 0) {
                    //Se sube las imagenes a la BBDD
                    const arrResult = await uploadArrayImages("productos_images", idImages, arrToPush);
                    datos_update.imagenes_producto.views = datos_update.imagenes_producto.views.concat(arrResult); // se añaden las nuevas referencias
                }
            }

        }
        //Actualiza los datos del producto
        await updateDataToStore("productos", datos_update.id, datos_update);
    }
}

const clearData = () => {
    store.initProducto();
    datos_articulo.value = store.producto;
    loading.value = false;
}

function eliminarDuplicados(primerArray, segundoArray) {
    // Crea un conjunto (set) de URLs del segundo array para una búsqueda eficiente
    const urlsSegundoArray = new Set(segundoArray);
    // Filtra el primer array y devuelve solo los elementos que no están en el segundo array
    const resultado = primerArray.filter(item => !urlsSegundoArray.has(item.url));
    return resultado;
}


</script>


<style scoped>
.loading {
    min-height: 80vh;
    display: grid;
    grid-template-rows: 1fr auto;
    align-items: center;
    justify-content: center;
}

.list-updates {
    top: 50%;
    right: 50%;
    transform: translate(50%, 50%);
    padding: 0;
}

.noti-msg {
    font-size: .8rem;
}

.alert-success {
    font-weight: 700;
}

.confirm-prod {
    width: 120px;
    margin: auto;
    margin-bottom: 2rem;
}

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