import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './sidebarData'
import { IconContext } from 'react-icons'
import './dashboardLayout.css'
import Navbar from '../navbar/Navbar'


function DashboardLayout() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Navbar showSidebar={showSidebar}/>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>

                </nav>
                <Outlet />
            </IconContext.Provider>
        </>
    )
}

export default DashboardLayout