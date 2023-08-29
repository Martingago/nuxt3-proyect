import productos from "./products.json";

export default defineEventHandler(()=> {
    return {
        productos,
    };
});