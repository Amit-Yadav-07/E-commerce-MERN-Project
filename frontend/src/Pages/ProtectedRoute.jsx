import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const {user} = useSelector(state=>state.user); // redux state


 
    useEffect(()=>{
      if(!user?.token){
          
          <Navigate to={'/login'}/>
      }
      if(user?.role==='user'){
        <Navigate to ='/user/dashboard' />
      }
    },[user])

  return (
    
    <div>{children}</div>

  )


 
}





export default ProtectedRoute