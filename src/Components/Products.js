import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';

const imagesURL = 'http://localhost:8000/images/';

export default function Products({ url, addToCart }) {
    const [categoryName, setCategoryName] = useState('');
    const [products, setProducts] = useState([]);

    let params = useParams();

    useEffect(() => {

        let address = '';

        if (params.searchPhrase === undefined) {
            address = url + 'products/getproducts.php/' + params.categoryId;
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
            <div className="row">
                {products.map(product => (
                    <div key={product.product_id} className="col-12 mb-4 d-flex align-items-stretch">
                        <div className="card">
                            <img className='card-img-top product-image' src={imagesURL + product.image} alt={product.name} />
                            <div className="card-body d-flex flex-column">
                                <Link
                                    className='product-name-link'
                                    to={'/showitem/' + product.product_id}>
                                    <h5 className="card-title text-white">
                                        {product.name}
                                    </h5>
                                </Link>
                                {product.lowered_price == null ? (
                                    <p className="card-text product-price text-white">Price: {product.price.toFixed(2) + "€"}</p>
                                ) : (
                                    <div>
                                        <p className="card-text original-price">
                                            Price:    {product.price.toFixed(2) + "€"}
                                        </p>
                                        <p className="card-text lowered-price">
                                            Price:    {product.lowered_price.toFixed(2) + "€"}
                                        </p>
                                    </div>
                                )}
                                <button className='btn product-btn btn-primary mt-auto' type="button" onClick={e => addToCart(product)}><TbIcons.TbShoppingCartPlus /> Add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}