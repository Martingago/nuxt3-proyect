import { defineStore } from "pinia";

export const useModalAlert = defineStore("store_modal", {
    state: () => ({
        message: "",
    }),

    actions: {
        openModal(){
            //mostrar toast
            const { $bootstrap } = useNuxtApp();
            var toastEl = document.getElementById('liveToast');
            var toast = new $bootstrap.Toast(toastEl);
            toast.show();
          },
          setMessage(message){
            this.message = message;
          },

    }
    
})