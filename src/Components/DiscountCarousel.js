import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';

const URL = "http://localhost:8000/products/getdiscountitems.php";
const imagesURL = 'http://localhost:8000/images/';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1480 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1480, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function DiscountCarousel({ addToCart }) {

    const [discounts, setDiscounts] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                const json = response.data
                setDiscounts(json);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])

    const handleAddToCart = (discount) => {
        addToCart(discount);
    };

    const truncateProductName = (name) => {
        const maxLength = 46;
        console.log(typeof name)
        if (name.length > maxLength) {
            return name.substring(0, maxLength - 1) + '...';
        }
        return name;
    }

    return (
        <Carousel responsive={responsive}>
            {discounts.map(discount => (
                <div key={discount.product_id} className='discount-items'>
                    <div className='item-carousel' style={{ width: "475px", minHeight: "410px" }}>
                        <img src={imagesURL + discount.image} />
                        <Link className='discount-link'
                            to={'/showitem/' + discount.product_id}>
                            <p>
                                {truncateProductName(discount.name)}
                            </p>
                        </Link>
                        <p className='original-price'>{discount.price.toFixed(2)}€</p>
                        <p className='lowered-price'>{discount.lowered_price.toFixed(2)}€</p>
                        <button class="btn btn-primary" type="button" onClick={() => handleAddToCart(discount)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
                    </div>
                </div>
            ))}
        </Carousel>
    )
}