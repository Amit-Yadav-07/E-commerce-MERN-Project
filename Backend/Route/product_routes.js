const express = require('express')

const multerUpload = require('../Middleware/multer');
const Product = require('../Models/Product');
const fs = require('fs')
const cloudinaryConfig = require('../config/cloudinaryConfig');
const { getCategory } = require('../utils/splitCategory');
const {isAuthenticated} = require('../Middleware/ProtectedRoute');
const router = express.Router();



router.get('/',async(req,res)=>{
    const { search, productCategory, sort } = req.query;

  const queryObject = {
    
  };

  if (search) {
    queryObject.productName = { $regex: search, $options: 'i' };
  }
  
  if (productCategory && productCategory !== 'all') {
    queryObject.productCategory = productCategory;
  }
  if(productCategory && productCategory==='women/all' || productCategory==='men/all' ){
    const startsWithWord = getCategory(productCategory);
    queryObject.productCategory = {
      $regex : `^${startsWithWord}`
    }
  }
  let result = Product.find(queryObject);

  if (sort === 'latest') {
    result = result.sort('-createdAt' || '-updatedAt');
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt' || 'updatedAt');
  }
  if (sort === 'a-z') {
    result = result.sort('productName');
  }
  if (sort === 'z-a') {
    result = result.sort('-productName');
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;


  console.log(queryObject)

  const totalProducts = await Product.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalProducts / limit);

  res.status(200).json({ products, totalProducts, numOfPages });
})



router.post('/testProductCRUD',isAuthenticated, multerUpload.array('multi-files'),async(req,res)=>{
  
    try {
        console.log(req.files)
        const {productName,productDescription,productPrice,productCategory} = req.body;


    
        const product = await Product.create(req.body);
        const productID = product._id.valueOf();


        const images = req.files.map((file)=>{
            return `uploads/`+file.filename;
        });

        const opts = {
            overwrite:true,
            invalidate:true,
            resource_type:'auto',
            folder:productCategory
        }

        images.forEach(async(image)=>{

            var imagesArray = []
            await cloudinaryConfig.uploader.upload(image,opts,async(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(result.secure_url);
                    await Product.findByIdAndUpdate({_id:productID},
                    {
                        $push : {images:result.secure_url}
                    },
                    {
                        new:true
                    });
                       
                    
                }
                console.log(image)
                // path of the image
                fs.unlinkSync(image);
            })
    
    
        });
        
        
        


        res.status(200).json({message:"test product crud"});
    } catch (error) {
        console.log(error)
        res.status(500).json({message:error.message});
    }
})


module.exports = router
