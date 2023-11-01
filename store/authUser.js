import { defineStore } from "pinia";

export const useUserStore = defineStore("initialize_userdata", {
    state: ()=> ({
        info: null, //objeto
        user_pedido: [], //array
        user_mostrado: [], //array
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
            if(this.previusRoute === '/crear-cuenta' || this.previusRoute === '/login'){
                router.push("/");
            }else{
                router.back();
            }
        }
    }

})