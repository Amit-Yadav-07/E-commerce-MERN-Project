import React from 'react'
import { Outlet } from 'react-router-dom'


const AdminDashboardContent = () => {
  return (
    <div style={{marginLeft:'0rem'}}>
        {<Outlet/>}
    </div>
  )
}

export default AdminDashboardContent