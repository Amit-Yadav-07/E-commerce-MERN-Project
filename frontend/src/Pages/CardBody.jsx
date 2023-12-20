import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/cart/cartSlice';

function CardBody({product}) {
    const dispatch = useDispatch()
    const {cartItems} = useSelector(state=>state.cart)
    console.log(cartItems.some((p)=>{
        console.log(p.product._id)
    }))
    return (
        <>

            <div className="card-body">
                <strong className='text-dark'>{product?.productName}</strong>
                <h5 className="card-title">&#8377;{product.productPrice}</h5>
                <p className="card-text text-black">{product.productDescription}</p>
                {cartItems && cartItems.some((p)=>p?.product._id=== product?._id) ? (
                     <span className="btn"  onClick={()=>{
                        dispatch(removeFromCart({product}))
                    }}><i className="bi bi-cart4 fa-2x"></i>Remove From cart</span>
                ) : (
                    <span className="btn"  onClick={()=>{
                        dispatch(addToCart({product}))
                    }}><i className="bi bi-cart4 fa-2x"></i>Add to cart</span>
                )}
               
            </div>
        </>
    )
}

export default CardBody;