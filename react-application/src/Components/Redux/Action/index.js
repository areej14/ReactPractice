// For Add item to Cart
export const addCart=(product)=>{
return{
    type :"ADDITEM",
    payload: product
}
}
// For Del item to Cart
export const delCart=(product)=>{
    return{
        type :"DELITEM",
        payload: product
    }
    }