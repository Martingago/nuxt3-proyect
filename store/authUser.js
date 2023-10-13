import { defineStore } from "pinia";

export const isAuth = ref(false);

export const useUserStore = defineStore("initialize_userdata", {
    state: ()=> ({
        info: null
    }),
    actions: {
        setUserInfo(userInfo, userID){
            this.info = {...userInfo, userID};
        }
    }

})