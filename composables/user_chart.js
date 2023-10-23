import { useUserStore } from '~~/store/authUser';
export {addProductToChart}
const storeUser = useUserStore();


const addProductToChart = async (product, count) => {
    let blockBtn = false;
    const carrito = storeUser.info.user_chart.products_in_chart; //Se obtiene informacion del store global
    
    const datos_producto = {
        productID: product.id,
        count: count,
    }
    const searchID = datos_producto.productID; //id del producto a buscar
    console.log(searchID);
    console.log(carrito);
    let item = carrito.find(item => item.productID === searchID); //Se busca el producto seleccionado en el carrito
    if (item) {
        //Si el producto ya existe en el array se le añaden las unidades de count
        const totalCount = item.count + count;
        if(totalCount < product.stock_articulo){
            item.count = totalCount
        }else{
            //Se alcanza el limite de stock
            item.count = product.stock_articulo;
            console.log("limiteee")
            blockBtn = true;
        }
        
    } else {
        //si el producto no existe en el carrito se añade en el array 
        storeUser.info.user_chart.products_in_chart.push(datos_producto);
    }
    //Actualizar los datos de firebase con el nuevo array:
    await updateDataAtribute(storeUser.info.userID, storeUser.info.user_chart.products_in_chart);
    return blockBtn;
}