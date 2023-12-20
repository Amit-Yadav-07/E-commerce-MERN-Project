import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

import AdminDashboardContent from './AdminDashboardContent';

function Dashboard() {
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'admin') {
      return;
    }
    navigate('/login');
    toast.warn('Please login to continue')
  }, [user])
  return (
    <>
      <div className='d-flex space-between'>


        <main className="d-flex flex-nowrap">
          <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
              <svg className="bi pe-none me-2" width="40" height="32"><use></use></svg>
              <span className="fs-4">Dashboard</span></a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link text-white" aria-current="page">
                  <i class="fa-solid fa-house text-white pe-4"></i>
                  Home</a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i class="fa-solid fa-gauge text-white pe-4"></i>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i class="fa-regular fa-calendar-days text-white pe-4"></i>
                  Orders
                </a>
              </li>
              <li>
                <span href="#" className="nav-link text-white " onClick={() => navigate('/admin/dashboard/AddProduct')}>
                  <i class="fa-solid fa-layer-group text-white pe-4"></i>
                  Add Product
                </span>
              </li>
              <li>
                <span href="#" className="nav-link text-white " onClick={() => navigate('/admin/dashboard/AllProducts')}>
                  <i class="fa-solid fa-layer-group text-white pe-4"></i>
                  All Products
                </span>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <i class="fa-solid fa-user text-white pe-4"></i>
                  Customers
                </a>
              </li>
            </ul>
            <hr />

          </div>
        </main>

        <>

          <AdminDashboardContent />
        </>
      </div>


    </>
  )
}

export default Dashboard;