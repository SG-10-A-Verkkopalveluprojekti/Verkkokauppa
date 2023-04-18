import React from 'react';
import Logo from '../Images/Northern Pc Store Logo.png'
import Banner from '../Images/Northern PC Store Banner.png'
import Banner2 from '../Images/SaleBanner.png'
import Banner3 from '../Images/Northern PC Store Banner 2.png'

export default function SpecialCarousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Banner} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Banner2} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={Banner3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}