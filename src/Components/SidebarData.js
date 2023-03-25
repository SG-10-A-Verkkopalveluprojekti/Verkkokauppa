import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
        {
            title: 'Test page',
            path: '/testPage',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpFill />,

            subNav: [
                {
                    title: 'Users',
                    path: '/testPage/users',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Revenue',
                    path: '/testPage/revenue',
                    icon: <IoIcons.IoIosPaper />,
                },
            ]
        },
        {
            title: 'reports',
            path: '/reports',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpFill />,
            subNav: [
                {
                    title: 'Reports',
                    path: '/reports/reports1',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Reports2',
                    path: '/reports/reports2',
                    icon: <IoIcons.IoIosPaper />,
                },
                {
                    title: 'Reports3',
                    path: '/reports/reports3',
                    icon: <IoIcons.IoIosPaper />,
                },
            ]
        },
        {
            title: 'Products',
            path: '/products',
            icon: <FaIcons.FaCartPlus />
        }
    ]