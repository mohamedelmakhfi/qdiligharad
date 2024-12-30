import React from 'react'
import SidebarLeft from '../SidebarLeft/SidebarLeft'
import { Outlet } from 'react-router-dom'
import '../../../Layout.css'

const MainLayout = () => {
  return (
    <div className="mainlayout_container">
      <div className='sideleft_main'>
        <SidebarLeft />
      </div>
      <div className="mainlayout_">
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout