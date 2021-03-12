import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../features/Cart';
// import image from '../../images/image_5.jpg'

function Product(props) {
    const { prod } = props;
    const path = prod.image;
    // const image = require(`../../${path}`).default;
    const dispatch = useDispatch();
    const handleAddToCart = (e,prod) => {
        e.preventDefault();
        const action = addToCart({id: prod.id, quantity: 1});
        dispatch(action);
    }

    return (
        <div className="col-md-6 col-lg-3">
            <div className="product">
                <a href="/" className="img-prod">
                <img
                        className="img-fluid"
                        src={require(`../../${path}`).default}
                        alt="Colorlib Template"
                    />
                    <span className="status">{prod.discount}%</span>
                    <div className="overlay"></div>
                </a>
                <div className="text py-3 pb-4 px-3 text-center">
                    <h3><a href="/">{prod.name}</a></h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price">
                                <span className="mr-2 price-dc">${prod.price}</span><span className="price-sale">${prod.price*(100-prod.discount)/100}</span>
                            </p>
                        </div>
                    </div>
                    
                    <div className="bottom-area d-flex px-3">
                        <div className="m-auto d-flex">
                            <Link
                                to={`/singleProduct?id=${prod.id}`}
                                className="single-product d-flex justify-content-center align-items-center text-center"
                            >
                                <span><i className="ion-ios-menu"></i></span>
                            </Link>
                            <a
                                href="/"
                                className="add-to-cart d-flex justify-content-center align-items-center mx-1 "
                                onClick={(e) => handleAddToCart(e,prod)}
                            >
                                <span><i className="ion-ios-cart"></i></span>
                            </a>
                            <a
                                href="/"
                                className="heart d-flex justify-content-center align-items-center"
                            >
                                <span><i className="ion-ios-heart"></i></span>
                                
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;