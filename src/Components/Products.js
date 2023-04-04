import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';
import Image from '../Images/Asus Geforce RTX 4070Ti GPU.png';

const URL = 'http://localhost:8000/images/';

export default function Products({ url }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproducts.php/' + params.categoryId)
            .then((response) => {
                const json = response.data;
                setCategoryName(json.category);
                setProducts(json.products);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })

    }, [params])

    return (
        <div>
            <h3>Products for {categoryName}</h3>
            {products.map(product => (
                <div key={product.product_id}>
                    <img src={URL + product.image} alt={Image} />
                    <Link
                        to={'/showitem/' + product.product_id}>
                        <p>
                            {product.name}
                        </p>
                    </Link>
                    <p>Price: {product.price.toFixed(2)} €</p>
                    <button className='btn btn-primary' type="button"><TbIcons.TbShoppingCartPlus />Add to cart</button>
                </div>
            ))}
        </div>
    )
}