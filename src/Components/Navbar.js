import React from 'react';
import Logo from '../Images/Northern Pc Store Logo.png'
import Sidebar from './Sidebar';


export default function Navbar() {
    return (
        <nav class="navbar sticky-top navbar-expand-lg">
            <div class="container-fluid">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <Sidebar />
                        </li>                       
                        <li>
                            <a class="navbar-brand" href="#"><img src = {Logo}/></a>
                        </li>
                        <li class="nav-item nav-link">
                            <a class="nav-link" aria-current="page" href="#">Northern PC Store</a>
                        </li>

                        <li class="nav-item nav-link">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item nav-link">
                            <a class="nav-link" href="#">Link 2</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav>
    );
}