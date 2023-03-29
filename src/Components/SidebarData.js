import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';

export const SidebarData = [
        {
            title: 'Test page',
            path: '/testPage',
            icon: <AiIcons.AiFillHome />,
        },

        // Button with submenu
        {
            title: 'Components',
            path: '/components',
            icon: <GiIcons.GiComputerFan />,
            // Submenu open and closed icons
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            // Submenu
            subNav: [
                {
                    title: 'Processors',
                    path: '/components/processors',
                    icon: <GiIcons.GiProcessor />,
                },
                {
                    title: 'Motherboards',
                    path: '/components/motherboards',
                    icon: <BsIcons.BsFillMotherboardFill />,
                },
                {
                    title: 'Graphic cards',
                    path: '/components/graphic_cards',
                    icon: <BsIcons.BsGpuCard />,
                },
                {
                    title: 'Hard disks',
                    path: '/components/hard_disks',
                    icon: <BsIcons.BsFillDeviceSsdFill />,
                },
                {
                    title: 'Power supplies',
                    path: '/components/power_supplies',
                    icon: <GiIcons.GiPowerGenerator />,
                },
                {
                    title: 'Memory',
                    path: '/components/memory',
                    icon: <BsIcons.BsMemory />,
                },
                {
                    title: 'Coolers',
                    path: '/components/coolers',
                    icon: <BsIcons.BsFan />,
                },
                {
                    title: 'Cases',
                    path: '/components/cases',
                    icon: <GiIcons.GiStrongbox />,
                }
            ]
        },

        //Button without submenu
        {
            title: 'Screens',
            path: '/screens',
            icon: <MdIcons.MdScreenshotMonitor />,
        },

        {
            title: 'Keyboards',
            path: '/keyboards',
            icon: <GiIcons.GiKeyboard />,
        },

        {
            title: 'Mouses',
            path: '/mouses',
            icon: <BsIcons.BsFillMouse3Fill />,
        },
    ]