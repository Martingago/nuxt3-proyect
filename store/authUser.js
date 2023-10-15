import { defineStore } from "pinia";

export const useUserStore = defineStore("initialize_userdata", {
    state: ()=> ({
        info: null,
        auth: false,
    }),
    actions: {
        setUserInfo(userInfo, userID){
            this.info = {...userInfo, userID};
        },
        setAuth(value){
            this.auth = value;
        }
    }

})