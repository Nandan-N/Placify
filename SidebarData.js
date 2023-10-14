import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'


export const SidebarData =[
    {
        title: 'Home',
        path : '/',
        icon: <AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title: 'Past Year Placements',
        path : '/',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'SignUp',
        path : '/',
        icon: <FaIcons.FaEnvelopeOpenText />,
        cName:'nav-text'
    },

]