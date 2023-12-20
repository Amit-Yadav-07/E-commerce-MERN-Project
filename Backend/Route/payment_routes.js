const express = require('express');
const { isAuthenticated } = require('../Middleware/ProtectedRoute');
const crypto =require("crypto");
const Razorpay = require('razorpay');

const router = express.Router();

const  instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });

router.get('/getKey',async(req,res)=>{
    try {
        res.status(200).json({key:process.env.RAZORPAY_API_KEY});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
});

router.post('/checkout',async (req, res) => {
   try {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
      };
      const order = await instance.orders.create(options);
    
      res.status(200).json({
        success: true,
        order,
      });
   } catch (error) {
    console.log(error)
    res.status(500).json({message:error.message})
   }
  })




  router.post('/paymentverification',async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body; 
  
      console.log(req.body) // {}
  
    const body = razorpay_order_id + "|" + razorpay_payment_id;
  
  
  
  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");
  
      console.log(expectedSignature)
      console.log(razorpay_signature)
  
    const isAuthentic = expectedSignature === razorpay_signature;
  
    if (isAuthentic) {
      // Database comes here
  
      
      
      
  
      res.redirect(
        `http://localhost:5173/paymentsuccess?reference=${razorpay_payment_id}`
      );
    } else {
      res.status(400).json({
        success: false,
      });
    }
  })





module.exports = router;