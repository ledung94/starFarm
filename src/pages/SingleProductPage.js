import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SingleProduct from '../components/products/SingleProduct';

function SingleProductPage() {
    return (
        <div>
            <Header />
            <SingleProduct />
            <Footer />
        </div>
    )
}

export default SingleProductPage;