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
              <NavLink to={`/item/1`}>
              <li className="nav-item active">
                <a className="nav-link">Item 1 <span className="sr-only">(current)</span></a>
              </li>
              </NavLink>
              <NavLink to={`/item/2`}>
              <li className="nav-item active">
                <a className="nav-link">Item 2</a>
              </li>
              </NavLink>
              <NavLink to={`/item/3`}>
              <li className="nav-item active">
                <a className="nav-link">Item 3</a>
              </li>
              </NavLink>
            </ul>
          </div>
          <NavLink to={`/cart`}><CartIcon /></NavLink>
        </nav>
        );
    }
}

export default Navbar;