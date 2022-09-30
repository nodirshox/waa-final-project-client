import React from 'react';
import * as FaIcons from 'react-icons/fa';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Properties',
        path: '/main/properties',
        icon: <MapsHomeWorkIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/main/messages',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Users',
        path: '/main/users',
        icon: <GroupIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/main/support',
        icon: <SupportAgentIcon />,
        cName: 'nav-text'
    }
]