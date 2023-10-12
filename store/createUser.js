import { defineStore } from "pinia";

export const manageCreateUsers = defineStore("manage_users", {
    state: () => ({
        user: {},
        alert: {
            status: false,
            message: ""
        }
    }),
    actions: {
        initUser() {
            this.user = {
                user_name: "test",
                user_email: "test@email.com",
                user_confirm_email: "test@email.com",
                user_password: "12345678",
                user_confirm_password: "12345678",
                user_chart: [],
                user_orders: [],
                user_returns: [],
                accept_promotions: true,
                accept_terms: false,
            }
        },
        checkPassword() {
            
            if (this.user.user_password === this.user.user_confirm_password) {
                this.alert.status = false;
                return true
            } else {
                this.alert.message = "Las contraseñas no coinciden";
                this.alert.status = true;
                return false
            }
        },
        checkEmail() {
            
            if (this.user.user_email === this.user.user_confirm_email) {
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
            
            if (this.user.user_password.length < 7) { 
                this.alert.message = "Las contraseñas deben tener 7 o más caracteres";
                this.alert.status = true;
                 return false }
                 return true;
        }

    }
}
);