import { useUserStore } from "~~/store/authUser";
import { useStorePedidos } from "~~/store/pedidosUsuarios";

export { tramitarPedido, getPedidosInfo, getPedidosInfoIndex }

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

    if (storeUsuario.info.user_chart.products_in_chart.length > 0) {
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
            storeUsuario.user_pedido.unshift(storePedido.pedido);
            storePedido.setErrorStatus(false);
            storePedido.setErrorMessage("");
            storePedido.setPedidoComplete(true);
            return true;
        } catch (error) {
            storePedido.setErrorStatus(true);
            storePedido.setErrorMessage("Se ha producido un error al gesionar el pedido. Lamentamos la indicencia, vuelva a intentarlo más tarde")
            return false;
        }
    } else {
        storePedido.setErrorStatus(true);
        storePedido.setErrorMessage("No se ha podido realizar el pedido ya que el carrito está vacio")

    }
}

/**
 * Funcion que recibe 2 parámetros
 * @param {*} info array con TODA la información que queremos obtener de la BBDD
 * @param {*} putInfo array en el que queremos guardar la información extraida de cada objeto de "info".
 * Si el array de putInfo está vacio se recorrerá al completo el array de info, ya que el usuario carga por primera vez la información
 * En caso de que existan diferencias de tamaños, se cargarán únicamente los nuevos valores, y se añadiran al principio de array 
 * (orden descendente:  más reciente a más antiguo);
 */
const getPedidosInfo = async (info, putInfo) => { 
        //Se ha añadido un nuevo producto al carrito. Debemos cargar la nueva informacion
        let datos = putInfo;
        for (let i = info.length -1; i > putInfo.length; i--) {
            let data = await getSingleDocumentData("pedidos_usuarios", info[i]);
            data = {
                ...data,
                formattedDate: getFormatoFecha(data.fecha_pedido)
            }
            
            datos = datos.unshift(data);
        }
        return datos;
}

/**
 * Funcion que recibe 4 parámetros
 * @param {*} info array con TODA la información que queremos obtener de la BBDD
 * @param {*} putInfo array en el que queremos guardar la información extraida de cada objeto de "info".
 * @param {number} start índice de inicio de paginacion
 * @param {number} step cantidad de saltos que hace el ciclo
 * @returns {number} valor con la posicion en la que se quedó en anterior indice
 */
const getPedidosInfoIndex = async (info, putInfo, start, step) => {
    // Asegurarse de que los índices están dentro del rango del array
    step = Math.max(0, step -1);
    start = Math.max(0, start);
    let newStart = Math.max(0, start - step);
        // Recorrer el array desde el índice final hasta el inicio (en orden inverso)
        for (let i = start; i >= newStart; i--) {
            let data = await getSingleDocumentData("pedidos_usuarios", info[i]);
            data = {
                ...data,
                formattedDate: getFormatoFecha(data.fecha_pedido)
            }
            putInfo.push(data); // Añadir al principio del array
        }
        
        return newStart = newStart -1;
}

const getFormatoFecha = (timeStamp) => {
    let fecha = "";
    timeStamp = timeStamp.toDate();
    let dia = timeStamp.getDate();
    let mes = timeStamp.getMonth() + 1;
    let ano = timeStamp.getFullYear();
    if (dia < 10) dia = '0' + dia;
    if (mes < 10) mes = '0' + mes;
    return fecha = dia + '/' + mes + '/' + ano;
}
