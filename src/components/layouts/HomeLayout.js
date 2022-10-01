import React, { useEffect } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './dashboardLayout.css'
import { useKeycloak } from '@react-keycloak/web';
import { getProfile } from '../../core/profile'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HouseIcon from '@mui/icons-material/House';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import DraftsIcon from '@mui/icons-material/Drafts';

function InitailLatters(name) {
    if (name) {
        var initials = name.match(/\b\w/g) || [];
        initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
        return initials;
    } else return name
}

function HomeLayout() {
    const navigate = useNavigate();
    const { keycloak } = useKeycloak();
    const [user, setUser] = React.useState({})
    useEffect(() => { getProfile(keycloak.token).then((res) => setUser(res)) }, [keycloak.token])
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const logoutHandler = () => keycloak.logout();
    const loginHanlder = () => keycloak.login();

    const hasRole = (keycloak) => {
        let userRole = "null";
        if (keycloak.hasRealmRole("admin")) {
            userRole = "admin";
        } else if (keycloak.hasRealmRole("owner")) {
            userRole = "owner";
        } else if (keycloak.hasRealmRole("customer")) {
            userRole = "customer";
        }
        localStorage.setItem("user_role", userRole);

        return keycloak.hasRealmRole("admin") || keycloak.hasRealmRole("owner") || keycloak.hasRealmRole("customer");
    }

    const isAdmin = (keycloak) => {
        return keycloak.hasRealmRole("admin");
    }

    const isOwner = (keycloak) => {
        return keycloak.hasRealmRole("owner");
    }

    const isCustomer = (keycloak) => {
        return keycloak.hasRealmRole("customer");
    }

    const createPropertyHandler = () => navigate("/owner/create");
    const applications = () => navigate("/owner/applications");
    const ownerProperties = () => navigate("/owner/properties");
    const favouriteListHandler = () => navigate("/properties/favourites");
    const selectRoleHandler = () => navigate("/role");
    const latestRented = () => navigate("/admin/rented");
    const latestCustomers = () => navigate("/admin/customers");

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="logo">
                            NJAN
                        </div>
                    </Link>
                    <div className='navbar-float-right'>
                        {
                            keycloak.authenticated &&
                            <React.Fragment >
                                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }} className="account-tab">
                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="small"
                                            sx={{ ml: 2 }}
                                            aria-controls={open ? 'account-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                        >
                                            <Avatar sx={{ width: 32, height: 32 }}>{InitailLatters(user.given_name)}</Avatar>
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <Avatar /> {user.given_name}
                                    </MenuItem>
                                    {
                                        hasRole(keycloak) === true ? <></> : <><MenuItem onClick={selectRoleHandler}><PersonAdd fontSize="small" /> Select role</MenuItem></>
                                    }
                                    {
                                        isOwner(keycloak) === true ? <><MenuItem onClick={createPropertyHandler}><AddCircleOutlineIcon /> Create property</MenuItem></> : <></>
                                    }
                                    {
                                        isOwner(keycloak) === true ? <><MenuItem onClick={applications}><DraftsIcon /> Applications</MenuItem></> : <></>
                                    }
                                    {
                                        isOwner(keycloak) === true ? <><MenuItem onClick={ownerProperties}><HouseIcon /> Properties</MenuItem></> : <></>
                                    }
                                    {
                                        isCustomer(keycloak) === true ? <><MenuItem onClick={favouriteListHandler}><FavoriteIcon /> Favourites</MenuItem></> : <></>
                                    }
                                    {
                                        isAdmin(keycloak) === true ? <><MenuItem onClick={latestRented}><HouseIcon /> Latest Rented</MenuItem></> : <></>
                                    }
                                    {
                                        isAdmin(keycloak) === true ? <><MenuItem onClick={latestCustomers}><RecentActorsIcon /> Latest Customers</MenuItem></> : <></>
                                    }
                                    <MenuItem onClick={logoutHandler}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        }
                        {!keycloak.authenticated && <span className="account-tab sign-in" onClick={loginHanlder}><FaIcons.FaSignInAlt /></span>}
                    </div>
                </div>
                <Outlet />
            </IconContext.Provider>
        </>
    )
}

export default HomeLayout