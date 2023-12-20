const express = require('express')

const multerUpload = require('../Middleware/multer');
const Product = require('../Models/Product');
const User = require('../Models/userModel');
const fs = require('fs')
const cloudinaryConfig = require('../config/cloudinaryConfig');
const { getCategory } = require('../utils/splitCategory');
const {isAuthenticated} = require('../Middleware/ProtectedRoute');
const router = express.Router();


router.get('/',isAuthenticated,async(req,res)=>{

    
    try {
        const user = await User.findOne({_id:req.user.userId});
        const cartItems = user.cart;

        res.status(200).json({data:cartItems});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

router.post('/manage',isAuthenticated,async(req,res)=>{
  
    console.log(req.user)
    try {
        await User.findByIdAndUpdate({_id:req.user.userId},{
            cart : req.body.cartItems  
          },{
              new:true
          })
      
          res.status(200).json({message:"cart updated"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

module.exports = router


