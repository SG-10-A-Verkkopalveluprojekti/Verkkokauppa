import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
        {
            title: 'Home page',
            path: '/',
            icon: <AiIcons.AiFillHome />,
        },

        // Button with submenu
        {
            title: 'Components',
            icon: <GiIcons.GiComputerFan />,
            // Submenu open and closed icons
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            // Submenu
            subNav: [
                {
                    title: 'Processors',
                    path: '/products/1',
                    icon: <GiIcons.GiProcessor />,
                },
                {
                    title: 'Motherboards',
                    path: '/products/2',
                    icon: <BsIcons.BsFillMotherboardFill />,
                },
                {
                    title: 'Graphic cards',
                    path: '/products/3',
                    icon: <BsIcons.BsGpuCard />,
                },
                {
                    title: 'Hard disks',
                    path: '/products/4',
                    icon: <BsIcons.BsFillDeviceSsdFill />,
                },
                {
                    title: 'Power supplies',
                    path: '/products/5',
                    icon: <GiIcons.GiPowerGenerator />,
                },
                {
                    title: 'Memory',
                    path: '/products/6',
                    icon: <BsIcons.BsMemory />,
                },
                {
                    title: 'Coolers',
                    path: '/products/7',
                    icon: <BsIcons.BsFan />,
                },
                {
                    title: 'Cases',
                    path: '/products/8',
                    icon: <GiIcons.GiStrongbox />,
                }
            ]
        },

        //Button without submenu
        {
            title: 'Screens',
            path: '/products/9',
            icon: <MdIcons.MdScreenshotMonitor />,
        },

        {
            title: 'Keyboards',
            path: '/products/10',
            icon: <GiIcons.GiKeyboard />,
        },

        {
            title: 'Mouses',
            path: '/products/11',
            icon: <BsIcons.BsFillMouse3Fill />,
        },
    ]