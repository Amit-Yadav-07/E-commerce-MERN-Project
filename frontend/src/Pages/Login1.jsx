import React, { useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';


let defaultLoginUserDetails = {
  email: '',
  password: ''
};

function Login1() {

  let [loginUserDetails,setLoginUserDetails] = useState(defaultLoginUserDetails);
  const {user} = useSelector((state)=>state.user);
  const navigate = useNavigate();

  const dispatch = useDispatch()

  let handleChange = (e) =>{
    setLoginUserDetails({...loginUserDetails,[e.target.name]:e.target.value});
  }

  let SubmitHandler = async (e) =>{
   e.preventDefault();
   dispatch(loginUser({email:loginUserDetails.email,password:loginUserDetails.password}));
  }
  
  useEffect(() => {
    if (user) {

      if(user.role==='admin'){
        navigate('/admin/dashboard');
        
      }
      if(user.role==='user'){
        
        navigate('/user/dashboard');
      }
    
    }
  }, [user]);

  return (
    <>

      <div className="all_container">
        <h2 className="py-3">logIn</h2>
        <form className="login_form_parent" onSubmit={SubmitHandler}>
          <div className="form-group">
            <label for="login-email">Email address</label>
            <input
              type="email"
              className="form-control"
              name='email'
              
              onChange={handleChange}
              id="login-email"
              placeholder="Enter Your Email ID"
            />
          </div>
          <div className="form-group">
            <label for="login-password" className=''>Password</label>
            <input
              type="password"
              className="form-control"
              name='password'
              
              id="login-password"
              placeholder="Enter Your Password"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn w-100 my-3 fs-5 text-white" style={{backgroundColor:"#337CCF"}}>Login</button>
          <strong className='fs-md-4 fs-6 d-block text-center'>Not A Member ? <NavLink className='text-decoration-none' to='/Register' >Register</NavLink></strong>
        </form>
      </div>
    </>
  )
}

export default Login1