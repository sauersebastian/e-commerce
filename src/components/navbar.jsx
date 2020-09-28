import React from 'react';
import { CartIcon } from './cartIcon';

class Navbar extends React.Component{
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://google.com.ar">E-Commerce</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="https://google.com.ar">Productos <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="https://google.com.ar">Contacto</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="https://google.com.ar">FAQ</a>
              </li>
            </ul>
          </div>
          <CartIcon />
        </nav>
        );
    }
}

export default Navbar;