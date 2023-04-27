import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';

const imagesURL = 'http://localhost:8000/images/';

export default function Products({ url }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {

        let address = '';

        if (params.searchPhrase === undefined) {
            address = url + 'products/getproducts.php/' + params.categoryId.toLowerCase();
        } else {
            address = url + 'products/searchproducts.php/' + params.searchPhrase.toLowerCase();
        }

        axios.get(address)
            .then((response) => {
                const json = response.data;
                if (params.searchPhrase === undefined) {
                    setCategoryName(json.category);
                    setProducts(json.products);
                } else {
                    setCategoryName(params.searchPhrase);
                    setProducts(json);
                }
                // })
                // axios.get(url + 'products/getproducts.php/' + params.categoryId)
                //     .then((response) => {
                //         const json = response.data;
                //         setCategoryName(json.category);
                //         setProducts(json.products);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })

    }, [params])

    return (
        <div className="products-cm">
            <h3 className='products-category'>Products for {categoryName}</h3>
            {products.map(product => (
                <div key={product.product_id}>
                    <img className='product-image' src={imagesURL + product.image} alt={product.name} />
                    <Link
                        to={'/showitem/' + product.product_id}>
                        <p>
                            {product.name}
                        </p>
                    </Link>
                    {product.lowered_price == null ? (
                        <p className="product-price">Price: {product.price.toFixed(2) + "€"}</p>
                    ) : (
                        <div>
                            <p className="original-price">
                            Price:    {product.price.toFixed(2) + "€"}
                            </p>
                            <p className="lowered-price">
                            Price:    {product.lowered_price.toFixed(2) + "€"}
                            </p>
                        </div>
                    )}
                    <button className='btn product-btn btn-primary' type="button"><TbIcons.TbShoppingCartPlus />Add to cart</button>
                </div>
            ))}
        </div>
    )
}