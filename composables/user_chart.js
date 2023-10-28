import { useUserStore } from '~~/store/authUser';
export {addProductToChart, deleteProductFromChart}
const storeUser = useUserStore();

/**
 * Funcion que añade "N" cantidades de "PRODUCTO" al carrito del usuario.
 * La información del carrito se guarda en el store.info del usuario => user_chart => products_in_chart
 * @param {*} product informacion del producto que se va a añadir en el carrito del usuario
 * @param {*} count informacion del Nº de unidades que se va a añadir de ese producto en el carrito
 * @returns {boolean} si se ha alcanzado el límite de stock devolverá true, en caso contrario devuelve false
 */
const addProductToChart = async (product, count) => {
    let blockBtn = false;
    const carrito = storeUser.info.user_chart.products_in_chart; //Se obtiene informacion del store global
    //datos que añadiran en el products_in_chart
    const datos_producto = {
        productID: product.id,
        count: count,
        price: Number(product.precio_venta)
    }
    const searchID = datos_producto.productID; //id del producto a buscar
    let item = carrito.find(item => item.productID === searchID); //Se busca el producto seleccionado en el carrito
    if (item) {
        //Si el producto ya existe en el array se le añaden las unidades de count
        const totalCount = item.count + count;
        if(totalCount < product.stock_articulo){
            item.count = totalCount
        }else{
            //Se alcanza el limite de stock
            item.count = product.stock_articulo;
            blockBtn = true;
        }
        
    } else {
        //si el producto no existe en el carrito se añade en el array 
        storeUser.info.user_chart.products_in_chart.push(datos_producto);
    }
    //Actualizar los datos de firebase con el nuevo array:
    
    await updateDataAtribute("datos_usuarios", storeUser.info.userID, "user_chart.products_in_chart", storeUser.info.user_chart.products_in_chart);
    calcularPrecioChart();
    return blockBtn;
}

/**
 * Funcion que elimina un producto del carrito del usuario
 * @param {*} product datos del producto a eliminar
 * Esta funcion accederá a los datos del usuario en su store => user_chart => products_in_chart
 *      => Si el elemento del carrito tiene un count mayor a 1, se le descontará -1 en su count
 *      => Si el elemento en el carrito es de 1, al descontar se eliminará del product_in_chart del usuario
 */
const deleteProductFromChart = async (product) => {
    const carrito = storeUser.info.user_chart.products_in_chart; //Se obtiene la infomacion del carrito desde el store
    //si el producto count es mayor a  1, se descontará el valor de count
    if (product.count >1) {
        product.count -= 1;
   
    }
    // En caso de tener un producto count igual a 1, se eliminará del array
    else if (product.count <= 1) {
        const idRemove = product.productID;
        storeUser.info.user_chart.products_in_chart = carrito.filter((producto) => producto.productID !== idRemove); //Se elimina del array el producto con count  de 0
    }
    //Actualizar los datos de firebase con el nuevo array:
    await updateDataAtribute("datos_usuarios", storeUser.info.userID, "user_chart.products_in_chart", storeUser.info.user_chart.products_in_chart); 
    calcularPrecioChart();
};


const calcularPrecioChart = async () => {
    let result = 0;
    const carrito = storeUser.info.user_chart.products_in_chart;
    for(let i =0; i<carrito.length; i++){
        const sum = carrito[i].count * Number(carrito[i].price);
        result += sum;
    }
    result = Number(result.toFixed(2));
    storeUser.info.user_chart.product_sum = result;
    await  updateDataAtribute("datos_usuarios", storeUser.info.userID, "user_chart.product_sum", storeUser.info.user_chart.product_sum);
}

