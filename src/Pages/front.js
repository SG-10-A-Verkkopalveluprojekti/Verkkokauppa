import React from 'react';
import SpecialCarousel from '../Components/SpecialCarousel';
import ProductCarousel1 from '../Components/ProductCarousel1';
import ProductCarousel2 from '../Components/ProductCarousel2';
import Categories from '../Components/Categories';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom';

export default function Front() {
    return (
        <>
            <div className='row'>
                <div className='carousel-container'>
                <SpecialCarousel/>
                </div>
            </div>
            <div className='row'>
                <Categories/>
            </div>
            <div className='row'>
                <div className='products'>
                    <div className='row' id='itemRow1'>
                        <ProductCarousel1/>
                    </div>
                    <div className='row' id='itemRow2'>
                        <ProductCarousel2/>
                    </div>
                </div>
            </div>
        </>
    )
}