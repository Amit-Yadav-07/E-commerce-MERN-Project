import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart, manageCart } from '../../features/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(total)

  const navigate = useNavigate();



  if (amount < 1) {
    return (
      <section className='cart row'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  const handleCheckout = () => {
    navigate('/user/cart/confirm');
  }
  return (
    <>

      <h2 className='mt-4'>your bag</h2>

      <section className='row'>
        {/*  */}
        <div className='col-md-6 col-12'>
          <div className='shadow' style={{ backgroundColor: 'var(--color)' }}>
            {cartItems && cartItems.map((item) => {
              console.log(item.amount)
              return <CartItem key={item._id} product={item.product} amount={item.amount} />;

            })}

          </div>

        </div>

        <div className='col-md-6 col-12 d-flex justify-content-around'>
          <div className='cart-total shadow p-3 w-100 text-white' style={{ background: 'var(--color)' }}>
            <h4>
              total <span style={{ color: "white" }}>${total}</span>
            </h4>

            <button className='mx-auto d-block w-50 btn btn-warning'
              onClick={handleCheckout}

            >Checkout</button>
          </div>


        </div>
        <button className='btn btn-danger my-4 w-25' onClick={() => {
          dispatch(clearCart())

        }

        }>
          clear cart
        </button>
        {/*  */}
      </section>
    </>
  );
}

export default CartContainer