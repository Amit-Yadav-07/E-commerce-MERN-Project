import React from 'react'
import { Outlet } from 'react-router-dom'


const UserDashboardContent = () => {
  return (
    <div style={{marginLeft:'0rem'}}>
        {<Outlet/>}
    </div>
  )
}

export default UserDashboardContent