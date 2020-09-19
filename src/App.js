import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
//import { ItemCounterClass } from './components/itemCountClass';
//import { CounterFunction } from './components/itemCountFunction';
import { ItemCounter} from './components/itemCount.jsx';

function App() {
  return (
    <div className="App">
        <Navbar />

        <div>
          <ItemCounter />          
        </div>
      <main>
          <Home greeting="Te paso un prop!" />
      </main>
    </div>
  );
}

export default App;
