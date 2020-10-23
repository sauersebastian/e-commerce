/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CartIcon } from '../CartIcon/cartIcon';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component{
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to={`/`}><a className="navbar-brand">E-Commerce</a></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categorias
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="/categories/yoga">Yoga</a>
                    <a class="dropdown-item" href="/categories/fitness">Fitness</a>
                  </div>
                </li>
              </ul>
            </div>
            <NavLink to={`/cart`}><CartIcon /></NavLink>
        </nav>
        );
    }
}

export default Navbar;