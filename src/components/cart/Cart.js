import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import products from '../../components/products/data'
import {  changeQuantity, removeToCart } from '../../features/Cart';

function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    let subTotal = 0;

    const handleCheckOut = () => {
        localStorage.setItem("cartTotal", subTotal);
    }

    const handleChangeQuantity = (e,item) => {
        if(!(/[0-9]+/.test(e.target.value))) return;
        const action = changeQuantity({id: item.id,quantity:e.target.value});
        dispatch(action);
    }
    const handleRemoveToCart = (event, item) => {
        event.preventDefault();
        const action = removeToCart(item);
        dispatch(action)
    }
    return (
        <section className="ftco-section ftco-cart">
            <div className="row justify-content-center">
                <div className="row">
                    <div className="col-md-12 ">
                        <table className="table">
                            <thead className="thead-primary">
                                <tr className="text-center">
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Product name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item,index) => {

                                    const product = products.find(product => product.id == item.id)
                                    const path = product.image
                                    const img = require(`../../${path}`).default
                                    subTotal += item.quantity * product.price;
                                    return (
                                        <tr className="text-center">
                                            <td className="product-remove"><a href="/cart" onClick={(event) => handleRemoveToCart(event, item)}><span className="ion-ios-close"></span></a></td>

                                            <td className="image-prod"><div className="img" style={{ backgroundImage: `url('${img}')` }}></div></td>

                                            <td className="product-name">
                                                <h3>{product.name}</h3>
                                                <p>{product.description}</p>
                                            </td>

                                            <td className="price">${product.price}</td>

                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input type="number" name="quantity" className="quantity form-control input-number" value={item.quantity} onChange={(e) => handleChangeQuantity(e,item)} min="1" max="100" />
                                                </div>
                                            </td>

                                            <td className="total">${item.quantity * product.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-3 cart-wrap ">
                    <div className="cart-total mb-3 bg-light">
                        <h3>Cart Totals</h3>
                        <p className="d-flex">
                            <span>Subtotal</span>
                            <span>${subTotal}</span>
                        </p>
                        <p className="d-flex">
                            <span>Tax</span>
                            <span>10%</span>
                        </p>
                        <p className="d-flex total-price">
                            <span>Total</span>
                            <span>${subTotal*(100+10)/100}</span>
                        </p>
                    </div>
                    <p><a href="/checkOut" className="btn btn-primary py-3 px-4" onClick={() => handleCheckOut()}>Proceed to Checkout</a></p>
                </div>
            </div>


        </section>
    )
}

export default Cart;