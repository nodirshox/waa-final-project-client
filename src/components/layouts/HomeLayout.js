import React, { useEffect } from 'react'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import { IconContext } from 'react-icons'
import './dashboardLayout.css'
import { useKeycloak } from '@react-keycloak/web';
import { getProfile } from '../../core/profile'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';


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
    const dashboardHandler = () => navigate('/main');
    const loginHanlder = () => keycloak.login();

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
                                    <MenuItem onClick={dashboardHandler}>
                                        <Avatar /> Main ({user.given_name})
                                    </MenuItem>
                                    <MenuItem onClick={logoutHandler}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </React.Fragment>
                        }
                        {!keycloak.authenticated && <span className="account-tab sign-in" onClick={loginHanlder}>Sign In <FaIcons.FaSignInAlt /></span>/*<Link to="auth" className="account-tab"> Sign In <FaIcons.FaSignInAlt /> </Link>*/}
                    </div>
                </div>
                <Outlet />
            </IconContext.Provider>
        </>
    )
}

export default HomeLayout