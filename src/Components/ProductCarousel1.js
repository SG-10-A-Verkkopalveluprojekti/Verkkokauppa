// Product carousel code has been taken from https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';

const URL = "http://localhost:8000/products/getitems.php";
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

export default function ProductCarousel1({ addToCart}) {
    const [item1, setItem1] = useState("")
    const [item2, setItem2] = useState("")
    const [item3, setItem3] = useState("")
    const [item4, setItem4] = useState("")
    const [item5, setItem5] = useState("")
    const [item6, setItem6] = useState("")

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                const json = response.data
                setItem1(json[5])
                setItem2(json[2])
                setItem3(json[6])
                setItem4(json[9])
                setItem5(json[12])
                setItem6(json[15])
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [])

    return (
        <Carousel responsive={responsive}>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
                <img src={imagesURL + item1?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item1.product_id}>
                    <p>
                        {item1.name}
                    </p>
                </Link>
                <p>{parseFloat(item1.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item1)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
            <img src={imagesURL + item2?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item2.product_id}>
                    <p>
                        {item2.name}
                    </p>
                </Link>
                <p>{parseFloat(item2.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item2)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
            <img src={imagesURL + item3?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item3.product_id}>
                    <p>
                        {item3.name}
                    </p>
                </Link>
                <p>{parseFloat(item3.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item3)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
            <img src={imagesURL + item4?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item4.product_id}>
                    <p>
                        {item4.name}
                    </p>
                </Link>
                <p>{parseFloat(item4.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item4)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
            <img src={imagesURL + item5?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item5.product_id}>
                    <p>
                        {item5.name}
                    </p>
                </Link>
                <p>{parseFloat(item5.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item5)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
            <div className='item-carousel' style={{width:"475px",minHeight:"390px"}}>
            <img src={imagesURL + item6?.image} />
                <Link className='product-link'
                    to={'/showitem/' + item6.product_id}>
                    <p>
                        {item6.name}
                    </p>
                </Link>
                <p>{parseFloat(item6.price).toFixed(2)}€</p>
                <button class="btn btn-primary" type="button" onClick={e => addToCart(item6)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
            </div>
        </Carousel>
    )
}