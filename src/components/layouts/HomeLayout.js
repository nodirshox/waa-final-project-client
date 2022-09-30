import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './dashboardLayout.css'


function HomeLayout() {
    const [loggedin, setSidebar] = useState(false)
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="logo">
                        NJAN
                    </div>
                    <div className='navbar-float-right'>
                        {/* TODO: show login only when user is not logged in, and show logout and user icons otherwise */}
                        <Link to="logout" className="account-tab">
                            <FaIcons.FaSignOutAlt />
                        </Link>
                        <Link to="main" className="account-tab">
                            <FaIcons.FaUserCircle />
                        </Link>
                        <Link to="login" className="account-tab">
                            <FaIcons.FaSignInAlt />
                        </Link>
                    </div>
                </div>
                <Outlet />
            </IconContext.Provider>
        </>
    )
}

export default HomeLayout