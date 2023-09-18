import { defineStore } from "pinia";
import { collection, getDocs } from "firebase/firestore";

export const storeProducts = defineStore("productos_tienda", {
    state: () => {
        return {
            productos: [],
            loading: true
        }
    },
    actions: {
        async fetchData() {
            if (!this.productos.length) {
                console.log("bajando productos desde el store")
                this.productos = await getDataFromStore("productos");
            }
            console.log("productos => ", this.productos)
            this.loading = false;
        },

        async getProductData(coleccion) {
            const { $db } = useNuxtApp();

            if (!this.productos.length) {
                try {
                    const querySnapshot = await getDocs(collection($db, coleccion));
                    querySnapshot.forEach(async (doc) => {
                        const r = await getSingleDocumentData("marca_productos", doc.data().marca);
                        let marca = "Marca sin especificar"
                        if (r) {
                            marca = r.nombre;
                        }
                        //se le añade su ID de su coleccion
                        const item = {
                            nombre_marca: marca,
                            id: doc.id,
                            ...doc.data()
                        }
                        this.productos.push(item)
                    });
                } catch (error) {
                    console.log(error)
                }
            }
            this.loading = false;
        }
    }
})