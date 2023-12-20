import React, { useEffect } from 'react'
import Card from './Card';
import FilterItems from './FilterItems';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/allProducts/allProductsSlice';
import { calculateTotals, getCartItems, manageCart } from '../features/cart/cartSlice';
import Loading from './components/Loading';

function AllProducts() {
  const dispatch = useDispatch()
  const {products,search,productCategory,sort,page} = useSelector(state=>state.allProducts)
  const {isLoading} = useSelector(state=>state.allProducts)


  

  useEffect(()=>{
    dispatch(getAllProducts())
  },[search,productCategory,sort,page])


  const {cartItems,amount,total,isLoading:cartLoading} = useSelector(state=>state.cart)
  useEffect(() => {
    dispatch(calculateTotals());
    if(! (cartItems.length===0 && amount ===0 && total===0 && !cartLoading)){

      // only then update the cart
      dispatch(manageCart({cartItems}));
    }
  }, [cartItems]);

  if(isLoading){
    return <Loading />
  }

  if(products.length===0){
    return <h1 style={{'textAlign':'center'}}>No products found</h1>
  }
  return (
    <>
    <h2 className="py-4">All Products</h2>
        {/* <FilterItems/> */}
      <Card products = {products}/>
   
    </>
  )
}

export default AllProducts;