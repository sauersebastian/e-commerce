import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
//import Item from './components/item'
import { productosFile } from './components/productos'
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart';


function App() {
  console.log("app");
  console.log(productosFile);
  return (
    <div className="App">
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
    </div>
    
  );
}

export default App;
