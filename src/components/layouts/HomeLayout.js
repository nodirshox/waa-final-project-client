import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './dashboardLayout.css'


function HomeLayout() {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="logo">
                        Zillow
                    </Link>
                    <Link to="main" className="account-tab">
                        <FaIcons.FaUserCircle />
                    </Link>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default HomeLayout