import React from 'react'
import UserDashboardContent from './UserDashboardContent'

const UserDashboard = () => {
    return (
        <>
        <div className='d-flex space-between'>
    
              
          <main className="d-flex flex-nowrap">
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px"}}>
              <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
                <svg className="bi pe-none me-2" width="40" height="32"><use></use></svg>
                <span className="fs-4">Dashboard</span></a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
              
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
        
        <UserDashboardContent />
        </>
        </div>
    
          
          </>
        )
}

export default UserDashboard