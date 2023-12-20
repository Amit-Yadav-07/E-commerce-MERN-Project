let mongoose = require('mongoose');

let productSchema = mongoose.Schema({
    productName:{
        type:String,
    },
    productDescription:{
        type:String,
    },
    productCategory:{
        type:String,
    },
    productPrice : {
        type:Number,
        
    },
    images :{
        type : []
    },
     

},{
    timestamps:true
})

module.exports =  mongoose.model('product',productSchema);