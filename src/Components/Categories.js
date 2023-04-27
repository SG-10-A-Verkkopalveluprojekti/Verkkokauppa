import * as GiIcons from 'react-icons/gi';
import * as BsIcons from 'react-icons/bs';
import * as MdIcons from 'react-icons/md';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

const URL = "http://localhost:8000/products/getcategories.php";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                const json = response.data
                setCategories([
                    { category_num: 1, title: 'Processors', path: '/products/1', icon: <GiIcons.GiProcessor size={50} /> },
                    { category_num: 2, title: 'Motherboards', path: '/products/2', icon: <BsIcons.BsFillMotherboardFill size={50} /> },
                    { category_num: 3, title: 'Graphic Cards', path: '/products/3', icon: <BsIcons.BsGpuCard size={50} /> },
                    { category_num: 4, title: 'Hard Disks', path: '/products/4', icon: <BsIcons.BsFillDeviceSsdFill size={50} /> },
                    { category_num: 5, title: 'Power Supplies', path: '/products/5', icon: <GiIcons.GiPowerGenerator size={50} /> },
                    { category_num: 6, title: 'Memory', path: '/products/6', icon: <BsIcons.BsMemory size={50} /> },
                    { category_num: 7, title: 'Coolers', path: '/products/7', icon: <BsIcons.BsFan size={50} /> },
                    { category_num: 8, title: 'Cases', path: '/products/8', icon: <GiIcons.GiStrongbox size={50} /> },
                    { category_num: 9, title: 'Screens', path: '/products/9', icon: <MdIcons.MdScreenshotMonitor size={50} /> },
                    { category_num: 10, title: 'Keyboards', path: '/products/10', icon: <GiIcons.GiKeyboard size={50} /> },
                    { category_num: 11, title: 'Mouses', path: '/products/11', icon: <BsIcons.BsFillMouse3Fill size={50} /> },

                ]);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])


    return (
        <div id="categories">
            {categories.map((category) => (
                <Link key={category.category_num} to={category.path} className="category-button">
                    <span className="category-button-icon">{category.icon}</span>
                    <span>{category.title}</span>
                </Link>
            ))}
        </div>
    );

}