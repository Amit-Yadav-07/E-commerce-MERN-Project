import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, manageCart, removeItem } from '../../features/cart/cartSlice';

const CartItem = ({ product, amount }) => {
  console.log(amount)
  const { images, productName, productPrice, _id } = product
  const dispatch = useDispatch()
  const { cartItems } = useSelector(state => state.cart)



  return (
    <>
      <div className=''>
        <article className='cart-item'>
          <img className='shadow' src={images[0]} alt={productName} />
          <div className='text-white'>
            <h4 className=' shadow'>{productName}</h4>
            <h4 className=' shadow' >${productPrice}</h4>

            <i
              className='fa-solid fa-trash d-block text-center py-2' style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(removeItem({ id: _id }));
              }}
            >

            </i>
          </div>
          <div className='text-white shadow d-flex py-2 justify-content-around'>
            <i
              className='fa-solid fa-plus' style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(increase({ id: _id, amount }));
              }}
            >

            </i>
            <p className='amount'>{amount}</p>
            <i
              className='fa-solid fa-minus' style={{ cursor: 'pointer' }}
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem({ id: _id }));
                  return;
                }
                dispatch(decrease({ id: _id }));
              }}
            >

            </i>
          </div>
        </article>
      </div>
    </>
  );
}

export default CartItem