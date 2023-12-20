import React, { useEffect } from 'react'
import '../Common.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/user/userSlice';
import { toast } from 'react-toastify';
import { handleChange } from '../../features/allProducts/allProductsSlice';

function FirstHead() {

  const { user } = useSelector(state => state.user);
  const { amount } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)

  useEffect(() => {
    if (user) {

      return
    } else {
      navigate('/login')
    }
  }, [user])


  const handleLogoutClick = (e) => {
    dispatch(logoutUser());
  }
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "black" }}>
        <div className="">
          <NavLink className="navbar-brand mx-4" id="navbar-brand"
          ><img src={require('../images/logo.png')}
            /></NavLink>
        </div>
        <button
          className="navbar-toggler mx-4"
          id="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div
            className="navbar-link mx-auto p-2 d-flex align-items-center justify-content-center two">
            <input
              className="form-control mr-sm-2"
              type="search"
              onChange={(e) => {
                console.log(location.pathname)
                if (location.pathname !== '/all-products') {
                  navigate('/all-products')
                }
                dispatch(handleChange({ name: 'search', value: e.target.value }))
              }}
              placeholder="Search"
              aria-label="Search" />
            <button
              className="btn my-2 text-white"
              style={{
                backgroundColor: 'var(--color)',
                fontWeight: 'bold',
                filter: 'drop-shadow(1px 1px 2px white)'
              }}>
              Search
            </button>
          </div>

          <div
            className="d-flex align-items-center justify-content-center mx-3 nav-link">
            {user ? <>
              <span
                onClick={() => navigate(`/${user?.role}/dashboard`)}
                className="btn my-2 my-sm-0 mx-2 text-white"

                style={{
                  backgroundColor: 'var(--color)',
                  color: 'black',

                  filter: 'dropShadow(1px 1px 2px white)',
                  fontWeight: 'bold'
                }}>Dashboard</span>
              {user?.role === 'user' && <span
                className="btn my-2 my-sm-0 mx-2 text-white"
                onClick={() => navigate(`/${user?.role}/cart`)}
                style={{
                  // backgroundColor: '#fff',
                  // color:'black',
                  position: 'relative',
                  filter: 'dropShadow(1px 1px 2px white)',
                  fontWeight: 'bold'
                }}>Cart <small style={{
                  position: 'absolute', top: '-1.2rem', right: "-0.5rem", background: 'white', color: 'black',
                  padding: '0.2rem 0.4rem', borderRadius: '2rem'
                }}>{amount}</small>   </span>}


              <NavLink

                className="btn my-2 my-sm-0 mx-2 text-white"
                onClick={handleLogoutClick}
                style={{
                  backgroundColor: 'var(--color)',
                  filter: 'dropShadow(1px 1px 2px white)',
                  fontWeight: 'bold'
                }}>Logout</NavLink>



            </>
              :

              <NavLink
                to='/login'
                className="btn my-2 my-sm-0 mx-2 text-white"
                style={{
                  backgroundColor: 'var(--color)',
                  filter: 'dropShadow(1px 1px 2px white)',
                  fontWeight: 'bold'
                }}>Login</NavLink>
            }


            <span >
              <i className="bi bi-cart4" style={{ color: 'white', cursor: 'pointer' }}></i>
            </span>
          </div>



        </div>
      </nav>

    </>
  )
}

export default FirstHead;