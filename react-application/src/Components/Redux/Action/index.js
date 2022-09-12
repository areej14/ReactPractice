// For Add item to Cart
export const addCart=(product)=>{
return{
    type :"ADDCART",
    payload: product
}
}
// For Del item to Cart
export const delCart=(product)=>{
    return{
        type :"DELCART",
        payload: product
    }
    }