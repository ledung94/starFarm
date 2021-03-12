import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import products from './data'
import { addToCart } from '../../features/Cart';

function SingleProduct() {
  const dispatch = useDispatch()
  const id = new URLSearchParams(window.location.search).get('id');
  const product = products.find(product => product.id == id);
  const [prod, setProd] = useState({
    quantity: 1,
    id: product.id
  });

  const handleCreaseQuantity = () => {
    const newProd = {...prod, quantity: prod.quantity + 1};
    setProd(newProd);
  }

  const handleDecreaseQuantity = () => {
    if(prod.quantity <= 1) return;
    const newProd = {...prod, quantity: prod.quantity - 1};
    setProd(newProd);
  }

  const handleAddToCart = (e, prod) => {
    const action = addToCart(prod);
    dispatch(action);
  }
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 ">
            <a href="#" className="image-popup"
            ><img
                src={require(`../../${product.image}`).default}
                className="img-fluid"
                alt="Colorlib Template"
              /></a>
          </div>
          <div className="col-lg-6 product-details pl-md-5 ">
            <h3>{product.name}</h3>
            <div className="rating d-flex">
              <p className="text-left mr-4">
                <a href="#" className="mr-2">5.0</a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
                <a href="#"><span className="ion-ios-star-outline"></span></a>
              </p>
              <p className="text-left mr-4">
                <a href="#" className="mr-2" style={{ color: "#000" }}
                >100 <span style={{ color: "#bbb" }}>Rating</span></a>
              </p>
              <p className="text-left">
                <a href="#" className="mr-2" style={{ color: "#000" }}
                >500 <span style={{ color: "#bbb" }}>Sold</span></a>
              </p>
            </div>
            <p className="price"><span>${product.price}</span></p>
            <p>
              {product.description}
            </p>
            <div className="row mt-4">
              <div className="w-100"></div>
              <div className="input-group col-md-6 d-flex mb-3">
                <span className="input-group-btn mr-2">
                  <button
                    type="button"
                    className="quantity-left-minus btn"
                    data-type="minus"
                    data-field=""
                    onClick={handleDecreaseQuantity}
                  >
                    <i className="ion-ios-remove"></i>
                  </button>
                </span>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  className="form-control input-number"
                  value={prod.quantity}
                  min="1"
                  max="100"
                  readOnly
                />
                <span className="input-group-btn ml-2">
                  <button
                    type="button"
                    className="quantity-right-plus btn"
                    data-type="plus"
                    data-field=""
                    onClick={handleCreaseQuantity}
                  >
                    <i className="ion-ios-add"></i>
                  </button>
                </span>
              </div>
              <div className="w-100"></div>
              <div className="col-md-12">
                <p style={{ color: "#000" }}>600 kg available</p>
              </div>
            </div>
            <p>
              <a href="/cart" className="btn btn-black py-3 px-5" onClick={(e) => handleAddToCart(e, prod)}
              >Add to Cart</a>
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}


export default SingleProduct;