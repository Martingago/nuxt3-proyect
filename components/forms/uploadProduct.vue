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
                <button @click="eliminarCaracteristica(index)" class="btn btn-danger">Eliminar</button>
            </div>
            <button @click="agregarCaracteristica" class="btn btn-primary  mt-2 mx-auto">Añadir Característica</button>
        </fieldset>

        <fieldset class="d-flex flex-column p2- bg-light">
            <legend class="text-center">Imágenes del producto</legend>
            <FormsUploadImage @portada-image-update="hanldePortadaImage"></FormsUploadImage>
            <FormsUploadArrayImages @array-images-update="handleImages"></FormsUploadArrayImages>

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
                        <select @change="hasDiscount($event)" name="decuentoProducto" id="descuentoProducto">
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
                            @click.prevent="calcularPVP">Calcular
                            PVP</button>
                    </div>
                </div>
            </div>
            <div class="notification-area rounded">
                <p v-if="alerta" class="alert alert-danger m-0 p-1">Error! El precio no puede ser menor o igual a 0</p>
                <p v-if="alertaUpdt" class="alert alert-warning m-0 p-1">Atencion! El precio del producto se ha actualizado
                    de
                    <span class="fw-bold">{{ pvpDesfase }}€</span> a <span class="fw-bold">{{ datos_articulo.precio_venta
                    }}€</span> en base a los descuentos aplicados
                </p>
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
onMounted(async () => {
    dataCategorias.value = await getDataFromStore('categoria_productos');
    dataBrands.value = await getDataFromStore('marca_productos')
})

const props = defineProps({
    getData: Object
})

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
const pvpDesfase = ref(0);

const datos_articulo = ref({
    nombre_articulo: "",
    slug: "",
    etiquetas_articulo: [],
    descripcion_articulo: "",
    marca: "",
    caracteristicas_articulo: [{ caracteristica: "" }],
    imagenes_producto: {
        id: "",
        portada: {},
        views: []
    },
    precio_venta: null,
    descuento: null,
    porcentaje_descuento: null,
    precio_anterior: null,
    stock_articulo: null
})

//imagenes temporales recibidas desde los componentes hijos (selectores de imagenes)
const temp_images = ref({
    temp_portada: {},
    temp_views: []
})


const slugTitle = () => {
    const cadena = datos_articulo.value.nombre_articulo;
    const slug = cadena.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    datos_articulo.value.slug = slug;
}

const hanldePortadaImage = (image) => {
    console.log("imagen recibida:", image);
    temp_images.value.temp_portada = image;
}

const handleImages = (images) => {
    console.log("imagenes recibidas:", images)
    temp_images.value.temp_views = images;
}


//determinar si tiene descuento o no:
const hasDiscount = (event) => {
    datos_articulo.value.descuento = event.target.value === 'true';
    if (event.target.value === 'false') {
        datos_articulo.value.porcentaje_descuento = null;
        datos_articulo.value.precio_anterior = null;
    }
}

const agregarCaracteristica = () => {
    datos_articulo.value.caracteristicas_articulo.push({ caracteristica: "" })
}

const eliminarCaracteristica = (index) => {
    datos_articulo.value.caracteristicas_articulo.splice(index, 1)
}

//Calcula el PVP en base a los datos de los descuentos
const calcularPVP = () => {
    if (datos_articulo.value.porcentaje_descuento >= 1 && datos_articulo.value.porcentaje_descuento < 100) {
        const descuento = 1 - datos_articulo.value.porcentaje_descuento / 100;
        const calculoDescuento = Number(descuento * datos_articulo.value.precio_anterior).toFixed(2);
        //Notificar de que el precio de producto se ha cambiado:
        pvpDesfase.value = datos_articulo.value.precio_venta
        if (datos_articulo.value.precio_venta != calculoDescuento) {
            console.log(`el precio se ha actualizado de: ${pvpDesfase.value} a ${calculoDescuento}`)
            alertaUpdt.value = true;
            alerta.value = false;
        }

        datos_articulo.value.precio_venta = Number(calculoDescuento);
    }
}

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
    //salta alerta de error de precio
    if (datos_articulo.value.precio_venta < 1) {
        alerta.value = true;
    } else {
        //se produce un update en el precio en caso de que no se haya producido antes
        calcularPVP();
        if (alertaUpdt.value == true) {
            console.log("el producto se subirá con la siguiente alerta: Actualización de precio");

        }
        //se suben las imagenes
        const idImages = Date.now();
        const arrayImages = temp_images.value.temp_views;
        const imagenPortada = temp_images.value.temp_portada;
        datos_articulo.value.imagenes_producto.id = idImages;

        if (imagenPortada) {
            console.log("subiendo imagen principal...")
            const imageResult = await uploadMainImage("productos_images", idImages, imagenPortada);
            datos_articulo.value.imagenes_producto.portada = imageResult
        }
        if (arrayImages) {
            console.log("subiendo conjunto de imágenes...")
            const arrayResult = await uploadArrayImages("productos_images", idImages, arrayImages);
            datos_articulo.value.imagenes_producto.views = arrayResult;
        }
        slugTitle();
        console.log("datos para subir:", datos_articulo.value)
        uploadDatatoStore("productos", datos_articulo.value)
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