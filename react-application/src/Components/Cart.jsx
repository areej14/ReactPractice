import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addCart,delCart } from './Redux/Action'

const Cart = () => {
    // const state=useSelector((state) => state.HandleCart)
    const dispatch = useDispatch();
  return (
    <div >
        {/* <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} height="200px" width="180px"/>
                </div>
                <div className="col-md-4"><h3>{product.title}</h3></div>
                <p className="lead fw-bold">
                    {product.qty} X ${product.price} =$
                    {product.qty * product.price} 
                </p>
     <button className="btn btn-outline-dark me-4" onClick={()=> dispatch(addCart(product))}>
        <i className="fa fa-minus"></i>
     </button>
     <button className="btn btn-outline-dark me-4" onClick={()=> dispatch(delCart(product))}>
        <i className="fa fa-plus"></i>
     </button>
            </div> 
        </div> */}
    </div>
  )
}

export default Cart