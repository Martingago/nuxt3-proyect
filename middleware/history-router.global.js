import { useUserStore } from "~~/store/authUser"

export default defineNuxtRouteMiddleware((to, from)=> {
    const user = useUserStore();
    user.setPreviusRoute(from.fullPath);
})
