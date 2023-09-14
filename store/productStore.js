import { defineStore } from "pinia";

export const storeProducts = defineStore("productos_tienda", {
    state: () => {
        return{
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
            this.loading = false;
        }

    }
})