import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CartConfirm = () => {

    const {cartItems,total} = useSelector((state)=>state.cart)
    const {user} = useSelector((state)=>state.user)
    const navigate = useNavigate();

    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:5000/api/v1/payment/getKey")
       

        const { data: { order } } = await axios.post("http://localhost:5000/api/v1/payment/checkout",{
            amount
        })

        console.log(order)

        const options = {
            key:key,
            amount: order?.amount,
            currency: "INR",
            name: `${user?.name}'s Order`,
            description: "React Js",
            // image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order?.id,
            callback_url: "http://localhost:5000/api/v1/payment/paymentverification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }

  return (
    <div>


        {/* table */}

        <table style={{margin:'0 auto',width:'100vw'}}>
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Product Category</th>
      <th>Product Quantity</th>
      <th>Product Price</th>
    </tr>
  </thead>
  <tbody>
    {
        cartItems.map((cartItem)=>{
            console.log(cartItem)
            const {productName,productCategory,productPrice} = cartItem.product;
            const quantity = cartItem.amount;

            return<>
            <tr>
            <td>{productName}</td>
            <td>{productCategory}</td>
            <td>{quantity}</td>
            <td>{productPrice}</td>
            </tr>
            <hr />
            </> 
        })
    }
   
  
    <td >
    
        <span style={{fontWeight:'3rem'}}>
   Total : {total}
        </span>
    </td>
  </tbody>
</table>


<div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1rem'}}>
<button style={{padding:'1rem',borderRadius:'20px'}} onClick={()=>{
    checkoutHandler (total)
}}>Checkout</button>
<button style={{padding:'1rem',borderRadius:'20px'}} onClick={()=>navigate('/user/cart')}>Edit Cart</button>
<button style={{padding:'1rem',borderRadius:'20px'}}onClick={()=>navigate('/all-products')}>Continue Shopping</button>

    </div>
</div>
  )
}

export default CartConfirm