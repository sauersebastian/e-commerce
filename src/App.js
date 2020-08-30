import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="App-header">

      </header>
      <main>
          <Home greeting="Te paso un prop!" />
        </main>
    </div>
  );
}

export default App;
