/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CartIcon } from './cartIcon';
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
              <li class="nav-item active dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Categorias
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <p><NavLink to={`/categories/yoga`}>Yoga</NavLink></p>
                  <p><NavLink to={`/categories/fitness`}>Fitness</NavLink></p>
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