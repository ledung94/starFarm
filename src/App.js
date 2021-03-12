import React from 'react';
import { Route } from 'react-router';
import './App.css';
import CartPage from './pages/CartPage';
import CheckOutPage from './pages/CheckOutPage';
import Home from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';

function App(){
  return(
    <div className="App">
      <Route path="/cart" exact component={CartPage}/>
      <Route path="/" exact component={Home}/>
      <Route path="/checkOut" exact component={CheckOutPage}/>
      <Route path="/singleProduct"  component={SingleProductPage}/>
    </div>
  )
}

export default App;