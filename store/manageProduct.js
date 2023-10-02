import { defineStore } from "pinia";

export const manageProducts = defineStore("manage_products", {
    state: () => ({
        //producto
        producto: {},
        //Imagenes temporales 
        temp_images: {
            temp_portada: {
                image: {},
                path: ""
            },
            temp_views: []
        },
        //loading
        item_state: {
            loading: true,
            alerta:{
                valor: false,
                mensaje: "",
                type: "alert-warning"
            }
        }
       
    }),
    actions: {
        //hace un slug del producto basandose en el titulo del producto
        slugTitle() {
            const cadena = this.producto.nombre_articulo;
            const slug = cadena.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            this.producto.slug = slug;
        },
        initProducto(){
            this.producto = {
                nombre_articulo: "",
                slug: "",
                etiquetas_articulo: [],
                descripcion_articulo: "",
                marca: "",
                caracteristicas_articulo: [{ caracteristica: "" }],
                imagenes_producto: {
                    id: "",
                    portada: {},
                    views: [{}]
                },
                precio_venta: null,
                descuento: false,
                porcentaje_descuento: null,
                precio_anterior: null,
                stock_articulo: null
            }
        },
        setProducto(dataProduct){
            this.producto = dataProduct;
        },

        //Establece una imagen temporal recibida como imagen de portada
        hanldePortadaImage(image) {
            console.log("image",image)
            this.temp_images.temp_portada.image = image.image;
            this.temp_images.temp_portada.path = image.path;
            console.log("this.image", this.temp_images.temp_portada);
        },
        //establece un array de imagenes recibidos temporalmente como el conjunto de imágenes
        handleArrayImages(images) {
            this.temp_images.temp_views = images;
        },
        //añade una caracteristica al producto
        agregarCaracteristica() {
            this.producto.caracteristicas_articulo.push({ caracteristica: "" })
        },
        //Elimina una caracteristica del producto
        eliminarCaracteristica(index) {
            this.producto.caracteristicas_articulo.splice(index, 1)
        },
        //determinar si tiene descuento o no:
        hasDiscount(event) {
            this.producto.descuento = event.target.value === 'true'; //boolean recibido de un string
            if (event.target.value === 'false') {
                this.producto.porcentaje_descuento = null;
                this.producto.precio_anterior = null;
            }
        },
        //Calcula el PVP en base a los datos de los descuentos
        calcularPVP() {
            const perDesc = this.producto.porcentaje_descuento; //descuento en base 100
            if (perDesc >= 1 && perDesc < 100) {
                const descuento = 1 - (perDesc / 100); //descuento en base 1 (Ej: 0.2; 0.4)
                const calculoDescuento = Number(descuento * this.producto.precio_anterior).toFixed(2);
                //Notificar de que el precio de producto se ha cambiado:
                const desfase = this.producto.precio_venta;
                if (desfase != calculoDescuento) {
                    console.log("envio valor")
                    this.item_state.alerta.mensaje = `El precio se ha actualizado de: ${desfase ? desfase : 0}€ a ${calculoDescuento}€ en base a los descuentos aplicados`;
                    this.item_state.alerta.valor = true;
                }
                this.producto.precio_venta = calculoDescuento;
            }
        }

    }
})