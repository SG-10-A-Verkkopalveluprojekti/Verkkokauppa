import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart }) {
    return (
        <div>
            <Link to={"/order"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
                <span
                    style={{ backgroundColor: "#2E4F4F", color: "#fff", position: "relative", top: "-10px", left: "-5px", fontSize: "12px", width: "20px", height: "20px", display: "inline-block", borderRadius: "15px", textAlign: "center", border: "1px solid #2E4F4F" }}>
                    {cart.length}
                </span>
            </Link>
        </div>
    )
}
