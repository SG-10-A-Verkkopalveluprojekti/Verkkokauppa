import Logo from '../Images/Northern Pc Store Logo.png';
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


export default function Navbar({url}) {
    const [categories,setCategories] = useState([]);
    
    useEffect(() => {
      axios.get(url + 'products/getcategories.php')
        .then((response) => {
            const json = response.data;
            console.log(json);
            setCategories(json);
        }).catch (error => {
            alert(error.response === undefined ? error: error.response.data.error);
        })
    }, [])
    

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Sidebar />
                        </li>                       
                        <li>
                            <a className="navbar-brand" href="#"><img src = {Logo}/></a>
                        </li>
                        <li className="nav-item nav-link">
                            <a className="nav-link" aria-current="page" href="#">Northern PC Store</a>
                        </li>
                        <li className='nav-item dp-1 dropdown'>
                            <a className='nav-link dropdown-toggle' href="#" id="dropdown01"
                            data-bs-toggle="dropdown" aria-expanded="false">Products</a>
                            <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                                {categories.map(category => (
                                    <li key={category.category_num}>
                                        <Link
                                            className='dropdown-item dp-3'
                                            to={'/products/' + category.category_num}>{category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li className="nav-item nav-link">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item nav-link">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li id='cart'>
                            <FaIcons.FaShoppingCart size="40px" color="white"/>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav>
    );
}