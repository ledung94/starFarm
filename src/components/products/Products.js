import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

function Products() {
    const product = useSelector(state => state.product)
    return (
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center mb-3 pb-3">
                    <div class="col-md-12 heading-section text-center">
                        <span class="subheading">Featured Products</span>
                        <h2 class="mb-4">Our Products</h2>
                        <p>
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    {
                        product.map(prod => <Product key={prod.id} prod={prod}/>)
                    }
                </div>
            </div>
        </section>
    )
}

export default Products;