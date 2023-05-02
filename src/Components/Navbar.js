import Logo from '../Images/Northern Pc Store Logo.png';
import Sidebar from './Sidebar';
import * as FaIcons from 'react-icons/fa';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';


export default function Navbar({url, cart}) {
    const [categories,setCategories] = useState([]);
    const [search,setSearch] = useState('');
    const navigate = useNavigate();

    const cartItemCount = cart.reduce((total, product) => total + product.amount, 0);
    
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

    function executeSearch(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            navigate('/search/' + search);
        }
    }
    

    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Sidebar />
                        </li>                       
                        <li>
                            <a className="navbar-brand" href="/"><img src = {Logo}/></a>
                        </li>
                        <li className="nav-item nav-link">
                            <a className="nav-link" aria-current="page" href="/">Northern PC Store</a>
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
                            <Link className="nav-link" to="/information">Information</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link className="nav-link" to="/feedback">Feedback</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className='nav-item'>
                            <Cart cart={cart} />
                            {cartItemCount > 0 &&<span className="cart-item-count">{cartItemCount}</span>}                         
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => executeSearch(e)}
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"/> 
                            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
            </div>
        </nav>
    );
}