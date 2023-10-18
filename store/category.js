import { defineStore } from "pinia";

export const useCategorias = defineStore("initialize_categorias", {
    state: () => ({
        categorias: []
    }),
    actions: {
        //Inicializa el Store de categorias
        async initializeCategorias(){
            if(!this.categorias.length){
                this.categorias = await getDataFromStore("categoria_productos");
            }
        }
    }
})