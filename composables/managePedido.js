import { useUserStore } from "~~/store/authUser";
import { useStorePedidos } from "~~/store/pedidosUsuarios";

export { tramitarPedido }

/**
 * Realiza el proceso de tramite de un pedido
 * Sube los datos del pedido en la coleccion de "pedidos_usuarios" y por otro lado, en la coleccion de
 * "datos_usuarios", se accede al id del usuario y se le añade en "user_orders" en nuevo pedido que ha hecho
 * Finalmente se borrarán los datos del carrito del usuario
 * @returns boolean
 * Si se produce un error en el proceso de realizar un pedido se notificará al usuario de un error
 */
const tramitarPedido = async () => {
    const storeUsuario = useUserStore();
    const storePedido = useStorePedidos();

    if(storeUsuario.info.user_chart.products_in_chart.length > 0){
        storePedido.initPedido();
        storePedido.setIdentificadorCliente(storeUsuario.info.userID); //establecemos identificador
        storePedido.setPrecioPedido(storeUsuario.info.user_chart.product_sum); //establecemos precio total
        storePedido.setProductosPedido(storeUsuario.info.user_chart.products_in_chart);
        try {
            //Subir la informacion del pedido a firebase.
            //obtener el codigo del pedido y establecerlo en datos_usuario => pedidos
            const id = await uploadDatatoStore("pedidos_usuarios", storePedido.pedido);
            //modificar el array de datos_pedidos del usuario y añadir el nuevo pedido
            storeUsuario.info.user_orders.push(id);
            await updateDataAtribute("datos_usuarios", storeUsuario.info.userID, "user_orders", storeUsuario.info.user_orders);
            storeUsuario.info.user_chart.products_in_chart = []; //Se vacia el carrito de usuario
            const carrito = []
            storeUsuario.info.user_chart.product_sum = 0;
            await updateDataAtribute("datos_usuarios", storeUsuario.info.userID, "user_chart.products_in_chart", carrito);
            await updateDataAtribute("datos_usuarios", storeUsuario.info.userID, "user_chart.product_sum", 0);
            storePedido.setErrorStatus(false);
            storePedido.setErrorMessage("");
            storePedido.setPedidoComplete(true);
            return true;
        } catch (error) {
            storePedido.setErrorStatus(true);
            storePedido.setErrorMessage("Se ha producido un error al gesionar el pedido. Lamentamos la indicencia, vuelva a intentarlo más tarde")
            return false;
        }
    }else{
        storePedido.setErrorStatus(true);
        storePedido.setErrorMessage("No se ha podido realizar el pedido ya que el carrito está vacio")
        
    }
 

}