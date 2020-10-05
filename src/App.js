import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import { productosFile } from './components/productos'
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/context/cartContext'


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
            <Route path='/item/:id'>
              <ItemDetailContainer product={productosFile} />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
      </BrowserRouter>
      </CartProvider>
    </div>
    
  );
}

export default App;
