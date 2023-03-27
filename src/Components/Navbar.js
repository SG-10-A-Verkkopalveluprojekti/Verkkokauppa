import React from 'react';
import Logo from '../Images/Northern Pc Store Logo.png'
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa'


export default function Navbar() {
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