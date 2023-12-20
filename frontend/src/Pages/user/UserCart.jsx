import React, { useEffect } from 'react'
import CartContainer from '../cart/CartContainer'
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems, manageCart } from '../../features/cart/cartSlice';
import Loading from '../components/Loading';
import { useLocation } from 'react-router-dom';

const UserCart = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  const {cartItems,amount,isLoading,total} = useSelector(state=>state.cart);
  const {isLoading:productsLoading} = useSelector(state=>state.allProducts);
  



  const {user } = useSelector(state=>state.user)
  


  
 

  useEffect(() => {
    dispatch(calculateTotals());



    // upon tracing the state in redux developer tool, the page reload caused the state to be : cartItems.length===0 && amount ===0 && total===0 && isLoading==false
    // ! when the page has not been reloaded
      if(!(cartItems.length===0 && amount ===0 && total===0 && !isLoading)){

        // only then update the cart
        dispatch(manageCart({cartItems}));
      }

      
   
}, [cartItems]);








  

 


  if(isLoading){
    return <Loading  />
  }
  return (
    <section className='cart-page'> 
    <CartContainer />
    </section>
  )
}

export default UserCart