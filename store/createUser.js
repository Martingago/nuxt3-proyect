import { defineStore } from "pinia";

export const manageCreateUsers = defineStore("manage_users", {
    state: () => ({
        user_private: {}, //Informacion privada del usuario
        user_public: {}, //Informacion publica a la que accede el sistema
        alert: {
            status: false,
            message: ""
        }
    }),
    actions: {
        initUserPrivate() {
            this.user_private = { 
                user_email: "",
                user_confirm_email: "",
                user_password: "",
                user_confirm_password: "",
            }
        },
        initUserPublic() {
            this.user_public = {
                user_name: "",
                user_chart: {
                    products_in_chart: [],
                    product_count: 0,
                    product_sum: 0
                },
                user_orders: [],
                user_returns: [],
                accept_promotions: true,
                accept_terms: false,
                user_email : ""
            }
        },


        checkPassword() {

            if (this.user_private.user_password === this.user_private.user_confirm_password) {
                this.alert.status = false;
                return true
            } else {
                this.alert.message = "Las contraseñas no coinciden";
                this.alert.status = true;
                return false
            }
        },
        checkEmail() {

            if (this.user_private.user_email === this.user_private.user_confirm_email) {
                this.alert.status = false;
                return true;
            }
            else {
                this.alert.message = "Las direcciones E-mail no coinciden";
                this.alert.status = true;
                return false
            }
        },
        checkLenghtPassword() {

            if (this.user_private.user_password.length < 7) {
                this.alert.message = "Las contraseñas deben tener 7 o más caracteres";
                this.alert.status = true;
                return false
            }
            return true;
        },

        setPublicEmail(data){
            this.user_public.user_email = data;
        }

    }
}
);