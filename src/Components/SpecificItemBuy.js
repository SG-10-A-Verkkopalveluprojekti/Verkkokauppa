import React from 'react';
import * as TbIcons from 'react-icons/tb';
import Image from '../Images/Asus Geforce RTX 4070Ti GPU.png'


export default function SpecificItemBuy() {
    return (
        <div className='specific-item-contents'>
            <div className='specific-item'>
                <div className='specific-item-img'>
                    <img src = {product?.image}/>
                </div>
                <div className='add-to-cart'>
                    <div className='specific-item-price'>{product?.price}</div>
                    <div className='specific-item-buy'>
                        <button class="btn btn-primary" type="button"><TbIcons.TbShoppingCartPlus /> Add to cart</button>
                        <div className='specific-item-delivery'>Estimated shipping time: 1-4 Weekdays</div>
                    </div>
                </div>
            </div>
        </div>
    )
}