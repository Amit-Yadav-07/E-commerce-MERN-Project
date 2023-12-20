import Header from '../src/Pages/Header/Header';
import Home from './Pages/Home';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from '../src/Pages/AllProducts.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Pages/Footer';
// import Register from './Pages/Register';
import Register1 from './Pages/Register1';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import AddProduct from './Pages/AddProduct';
import Dashboard from './Pages/Dashboard';
import Login1 from './Pages/Login1';
import ProtectedRoute from './Pages/ProtectedRoute';
import UserProfile from './Pages/user/UserProfile';
import UserOrders from './Pages/user/UserOrders';
import UserDashboard from './Pages/user/UserDashboard';
import UserCart from './Pages/user/UserCart';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Pages/components/Loading';
import { useEffect } from 'react';
import { getCartItems } from './features/cart/cartSlice';
import CartConfirm from './Pages/cart/CartConfirm';
import SingleProduct from './Pages/SingleProduct';

function App() {
  const { isLoading, products } = useSelector((state => state.allProducts))

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user);



  useEffect(() => {
    dispatch(getCartItems())
  }, [user])

  return (


    <div className="App">

      <ToastContainer position='top-right' />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all-products' element={<AllProducts />} />
          <Route path='/user/dashboard' element={<ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>}>
            <Route path='profile' element={< UserProfile />} />
            <Route path='orders' element={< UserOrders />} />
          </Route>

          <Route path='/user/cart' element={<ProtectedRoute>
            < UserCart />
          </ProtectedRoute>} />
          <Route path='/user/cart/confirm' element={<ProtectedRoute>
            < CartConfirm />
          </ProtectedRoute>} />
          <Route path='admin/dashboard' element={<ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>} >

            <Route path='AllProducts' element={<AllProducts />} />
            {/* <Route path='/Register' element={<Register />}  /> */}
            <Route path='Contact' element={<Contact />} />
            <Route path='AddProduct' element={<AddProduct />} />
            <Route path='AllProducts' element={<AllProducts />} />

          </Route>


          <Route path='/Register' element={<Register1 />} />
          <Route path='/Login' element={<Login1 />} />
          <Route path='/SIngleProduct' element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
