import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../features/user/userSlice';
import {useDispatch} from 'react-redux';

let defaultUserObject = {
  name: '',
  email: '',
  password: ''
}

function Register1() {
  let navigate = useNavigate();

  let [registerUserDetails, setRegisterUserDetails] = useState(defaultUserObject);
  const dispatch = useDispatch();

  let handleChange = (e) => {
    setRegisterUserDetails({...registerUserDetails,[e.target.name]:e.target.value});
  }
  // console.log(value);

  let SubmitHandler = async (e) => {
      e.preventDefault();
   dispatch(registerUser({name:registerUserDetails.name,email:registerUserDetails.email,password:registerUserDetails.password}));



  }

  return (
    <>

      <div className="all_container">
        <h2 className="py-3">Register</h2>
        <form className="login_form_parent" onSubmit={SubmitHandler}>
          <div className="form-group">
            <label for="login-email">Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              name='name'
              onChange={handleChange}

              id="login-email"
              placeholder="Enter Your Name"
            />
          </div>
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
            <label for="login-password">Password</label>
            <input
              type="password"
              className="form-control"
              name='password'

              onChange={handleChange}
              id="login-password"
              placeholder="Enter Your Password"
            />
          </div>
          <button type="submit" className="btn w-100 my-3 text-white fs-5" style={{backgroundColor:"#337CCF"}}>Register Now</button>
          <strong className='fs-md-4 fs-6 d-block text-center'>Already A Member ? <NavLink className='text-decoration-none' to='/Login' >Login</NavLink></strong>
        </form>
      </div>
    </>
  )
}

export default Register1;