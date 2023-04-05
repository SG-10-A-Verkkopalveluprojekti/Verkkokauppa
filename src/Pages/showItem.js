import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import * as TbIcons from 'react-icons/tb';
import SpecificItemBuy from '../Components/SpecificItemBuy';
import SpecificItemInfo from '../Components/SpecificItemInfo';

const imagesURL ='http://localhost:8000/images/';

const ShowItem = ({ url }) => {
    const [product, setProduct] = useState(null);

    let params = useParams();

    useEffect(() => {
        axios.get(url + 'products/getproduct.php/' + params.product_id)
            .then((response) => {
                const json = response.data;
                setProduct(response.data);
            }).catch(error => {
                alert(error.response === undefined ? error : error.response.data.error);
            })
    }, [params])

    return (
        <div>
            <div className='specific-item-contents'>
                <div className='specific-item'>
                    <div className='specific-item-img'>
                        <img src={imagesURL + product?.image} />
                    </div>
                    <div className='add-to-cart'>
                        <div className='specific-item-price'>{product?.price.toFixed(2) + "€"}</div>
                        <div className='specific-item-buy'>
                            <button class="btn btn-primary" type="button"><TbIcons.TbShoppingCartPlus /> Add to cart</button>
                            <div className='specific-item-delivery'>Estimated shipping time: 1-4 Weekdays</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='specific-item-info-contents'>
                <div className='specific-item-info'>{product?.name}</div>
            </div>
        </div>
    );
}

{/* <SpecificItemBuy/> */ }
{/* <SpecificItemInfo/> */ }

export default ShowItem;