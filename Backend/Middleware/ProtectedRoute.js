let Model = require('../Models/userModel');
let env = require('dotenv').config();
let JWT = require('jsonwebtoken');


const isAuthenticated = async (req,res,next) => {

  console.log(req.headers.authorization)
    let authHeader =  req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({message:'JWT NOT present'})
      }

    const token = authHeader.split(' ')[1];



  
    if(!token){
        console.log('user is not Logged in');
      return res.status(403).json({message:'user is not Logged in'});
    }
        //  return res.status(200).json({message:'Please Provide Token'});
    
        
        try {
          console.log('from middleware')
          const payload =  JWT.verify(token,process.env.SECRET_KEY);
        req.user = { userId: payload.id, name: payload.name,role:payload.role }
        next()
        
    } catch (error) {
      res.status(500).json({message:error.message})
      console.log(error);
      
    }
}

const isUserAdmin = async(req,res,next)=>{
  try {
    
    if(req.user.role!=='admin'){
      return res.status(401).json({message:"Invalid Session"});
    }else{
      next();
    }
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}




module.exports = {isAuthenticated,isUserAdmin};