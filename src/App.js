import React from 'react';
import './App.css';
import Navbar from './components/navbar';
//import Home from './components/home';
//import { ItemCounterClass } from './components/itemCountClass';
//import { CounterFunction } from './components/itemCountFunction';
import { ItemCounter} from './components/itemCount.jsx';
//import ItemList from './components/itemList';
import Item from './components/item';

function App() {
  return (
    <div className="App">
        <Navbar />

        <div>
          <ItemCounter />          
        </div>
      <main>
          <Item />
      </main>
    </div>
  );
}

export default App;
