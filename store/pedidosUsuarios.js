import { defineStore } from "pinia";

export const useStorePedidos = defineStore("pedidos_usuario", {

    state: ()=> ({
        pedido : null,
        user_details : null

    }),

    actions:  {
        setPedido(pedido) {
            this.pedido = pedido;
        },
        setUserDetails(details){
            this.user_details = details;
        },
        initPedido(){
            this.pedido = {
                codigo_pedido: this.generarCodigo(),
                identificador_cliente: "",
                nombre: this.user_details.nombre,
                direccion_pedido: this.user_details.direccion + " " + this.user_details.cp + " " + this.user_details.ciudad,
                productos_pedido: [],
                fecha_pedido: new Date(),
                precio_total: ""
            }
        },
        setIdentificadorCliente(identificador){
            this.pedido.identificador_cliente = identificador;
        },
        generarCodigo() {
            const letra = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
            const numero = Math.floor(Math.random() * 10000);
            return letra + numero;
        },
        setPrecioPedido(precio){
            this.pedido.precio_total = precio;
        },
        setProductosPedido(productos){
            this.pedido.productos_pedido = productos;
        }
    }
})