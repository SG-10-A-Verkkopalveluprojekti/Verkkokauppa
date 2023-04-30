import React, { createRef, useRef } from 'react';
import uuid from "react-uuid";
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as BsIcons from 'react-icons/bs';


export default function Order({ url, cart, removeFromCart, updateAmount}) {
    const [inputs,_] = useState([]);
    const [inputIndex, setInputIndex] = useState(-1);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)];

    function empty() {
        localStorage.clear();
        location.reload();
    }

    function order(e) {
        e.preventDefault();

        let anyEmpty = false
        inputRefs.forEach((ref) => {
            if (ref.current.value ==='') {
                anyEmpty = true;
            }
        })

        if (anyEmpty) {
            return alert('Please fill all information');
        }

        const json = JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            address: address,
            zip: zip,
            city: city,
            cart: cart,
        });
        axios.post(url + 'order/save.php', json, {
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
        }
    })
    .then(() => {
        empty();
        // setFinished(true);
    }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
    });
    }


    let sum = 0;

    function changeAmount(e,product, index) {
        updateAmount(e.target.value,product);
        setInputIndex(index);
    }

    useEffect(() => {
        for (let i = 0; i<cart.length; i++) {
            inputs[i] = createRef();
        }
    })

    useEffect (() => {
        if (inputs.length > 0 && inputIndex > -1 && inputs[inputIndex].current !== null) {
            inputs[inputIndex].current.focus();
        }
    }, [cart])
/*
    function correctPrice (product) {
        if (product.lowered_price !== null) {
            return product.lowered_price;
        } else {
            return product.price;
        }
    }


async function correctPrice(url, product) {
    try {
      const response = await axios.get(url + 'products/getproduct.php', product);
      const products = response.data;
      if (products.lowered_price !== null) {
        return products.lowered_price;
      } else {
        return products.price;
      }
    } catch (error) {
      console.log(error);
    }
  }
*/
    return (
        <div className='cart-main'>
            <h3 className="header">Items in cart</h3>
            <table className="table cart-table">
                <tbody>
                    {cart.map((product, index) => {
                        sum+=parseFloat(product.price) * parseInt(product.amount);
                        return(
                            <tr key={uuid()}>
                                <td>{product.name}</td>
                                <td>{product.price} €</td>
                                {/* <td>{correctPrice()} €</td> */}
                                <td>
                                    <input ref={inputs[index]} style={{width: '60px'}} value={product.amount} onChange={e => changeAmount(e,product,index)} />
                                </td>
                                <td><a href='#' onClick={() => removeFromCart(product)}><BsIcons.BsFillTrashFill/></a></td>
                            </tr>
                        )
                    })}
                    <tr key={uuid()}>
                        <td></td>
                        <td>{sum.toFixed(2)} €</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            
            {cart.length > 0 && //Render order form, if there is something in cart
                <>
                    <h3 className="header">Client information</h3>
                    <form onSubmit={order}>
                        <div className="form-group">
                            <label>First name:</label>
                            <input className="form-control" ref={inputRefs[0]} onChange={e => setFirstname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Last name:</label>
                            <input className="form-control" ref={inputRefs[1]} onChange={e => setLastname(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                            <input className="form-control" ref={inputRefs[2]} onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>Postal code:</label>
                            <input className="form-control" ref={inputRefs[3]} onChange={e => setZip(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <input className="form-control" ref={inputRefs[4]} onChange={e => setCity(e.target.value)}/>
                            <div className="buttons">
                                <button className="btn btn_primary order-button">Order</button>
                            </div>
                        </div>
                    </form>
                </>
            }
        </div>  
    )
}