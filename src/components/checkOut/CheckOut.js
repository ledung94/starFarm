import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import  { checkOut } from '../../features/Cart';

function CheckOut() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const action = checkOut(newRecord);
        dispatch(action)
        setNewRecord({
            firstname: "",
            lastname: "",
            address: "",
            phone: "",
            mail: "",
            cart: cart
        })
    }
    const [newRecord, setNewRecord] = useState({
        firstname: "",
        lastname: "",
        address: "",
        phone: "",
        mail: "",
        cart: cart
    })

    const [selectedOption, setSelectedOption] = useState({
        option: "option 1"
    });
    const handleInputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setNewRecord({ ...newRecord, [key]: value });
    }
    const handleSelectRadio = (e) => {
        setSelectedOption({...selectedOption, option: e.target.value}) 

    }

    return (
        <div class="row justify-content-center">
            <div class="col-xl-5 bg-light">
                <form action="#" class="billing-form" onSubmit={handleOnSubmit}>
                    <h3 class="mb-4 billing-heading">Billing Details</h3>
                    <div class="row align-items-end">

                        <div class="col-md-12">
                            <div class="form-group">
                                <p style={{ borderBottom: "2px solid black", color: "black" }}>Card Total<span className="float-right">${localStorage.getItem("cartTotal")}</span></p>
                                <p style={{ borderBottom: "2px solid black", color: "black" }}>Tax<span className="float-right">10%</span></p>
                                <p style={{ borderBottom: "2px solid black", color: "black", fontWeight: "bolder" }}>Total<span className="float-right">${localStorage.getItem("cartTotal") * (100 + 10) / 100}</span></p>
                            </div>
                        </div>
                        <div class="w-100"></div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="firstname">Firt Name</label>
                                <input type="text" class="form-control" required placeholder="" name="firstname" value={newRecord.firstname} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="lastname">Last Name</label>
                                <input type="text" class="form-control" required placeholder="" name="lastname" value={newRecord.lastname} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="country">Adress</label>
                                <input type="text" class="form-control" required placeholder="" name="address" value={newRecord.address} onChange={handleInputChange} />
                                {/* <input type="text" class="form-control" placeholder="" name="address" value={newRecord.address} onChange={(e)=> {handleInputChange(e)}} /> this function is fine but longer*/}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" class="form-control" required placeholder="" name="phone" value={newRecord.phone} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="emailaddress">Email Address</label>
                                <input type="email" class="form-control" required placeholder="" name="mail" value={newRecord.mail} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div class="w-100"></div>
                        <div class="col-md-12">
                            <div class="form-group mt-4">
                                <div class="radio">
                                    <label class="mr-3"
                                    ><input type="radio" name="optradio" value="option 1" onChange={handleSelectRadio} checked={selectedOption.option==='option 1'} /> Update new info
                      </label>
                                    <label
                                    ><input type="radio" name="optradio" value="option 2" onChange={handleSelectRadio} checked={selectedOption.option==='option 2'} /> Ship to
                        different address</label>
                                </div>
                            </div>
                        </div>


                    </div>
                    <hr class="mb-4" />
                    <p><button class="btn btn-primary btn-lg btn-block" type="submit" >Continue to checkout</button></p>
                </form>

            </div>

        </div>
    )
}

export default CheckOut;