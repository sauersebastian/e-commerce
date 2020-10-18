import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './containers/home';
import ItemDetailContainer from './containers/itemDetailContainer';
import Cart from './containers/Cart';
import { CartProvider } from './context/cartContext'
import ItemListContainer from './containers/itemListContainer';
import Checkout from './containers/checkout';


function App() {
  
  
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>  
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path='/categories/:id'>
              <ItemListContainer />
            </Route>
            <Redirect from='/item/:id' to='/categories/item/:id' />
            <Route exact path='/categories/item/:id'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
