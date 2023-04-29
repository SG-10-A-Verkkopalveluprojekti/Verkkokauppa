import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from 'react-icons/bs';

export default function Cart({ cart }) {
    return (
        <div>
            <Link to={"/order"}>
                <BsIcons.BsFillCartFill />
                <span style={{color: '#fff'}}></span>
            </Link>
        </div>
    )
}
