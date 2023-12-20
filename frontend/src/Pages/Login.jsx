import React from 'react';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';


let userData = {
  email: '',
  password: ''
};

function LogIn() {

  let [value,setValue] = useState(userData);
  let ChangeHandler = (e) =>{
   setValue({...value,[e.target.name]:e.target.value})
  }
  // console.log(value);

  let SubmitHandler = async (e) =>{
   e.preventDefault()
   
   try {
    let response = await axios.post('http://localhost:5000/api/v1/auth/login',value)
    // console.log(response);
    toast.success(response.data.message);
   } catch (error) {
    console.log(error.response.data.message);
    toast.error(error.response.data.message);
   }
  }
  

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
              
              onChange={ChangeHandler}
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
              onChange={ChangeHandler}
            />
          </div>
          <button type="submit" className="btn w-100 my-3 fs-5 text-white" style={{backgroundColor:"#337CCF"}}>Login</button>
          <strong className='fs-md-4 fs-6 d-block text-center'>Not A Member ? <NavLink className='text-decoration-none' to='/Register' >Register</NavLink></strong>
        </form>
      </div>
    </>
  )
}

export default LogIn