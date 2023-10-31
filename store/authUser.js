import { defineStore } from "pinia";

export const useUserStore = defineStore("initialize_userdata", {
    state: ()=> ({
        info: null,
        user_pedido: [],
        user_mostrado: [],
        auth: false,
        previusRoute: null,
        loaded: false
    }),
    actions: {
        setUserInfo(userInfo, userID){
            this.info = {...userInfo, userID};
            this.loaded = true;
        },
        setAuth(value){
            this.auth = value;
        },
        setPreviusRoute(value){
            this.previusRoute = value;
        },
        pushUser(){
            const router = useRouter();
            if(this.previusRoute === '/crear-cuenta'){
                router.push({name: 'index'});
            }else{
                router.back();
            }
        }
    }

})