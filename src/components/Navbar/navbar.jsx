/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { CartIcon } from '../CartIcon/cartIcon';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png"
import "./navbar.css"

export default function Navbar() {
  return(
      <nav className="navbar navbar-expand-lg navbar-custom">
        <NavLink to={`/`}><a className="navbar-brand"><img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" /> YogaMar</a></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" aria-haspopup="true" aria-expanded="false">
              <NavLink to={`/`} className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink to={`/categories/fitness`} className="dropdown-item">Fitness</NavLink>
                <NavLink to={`/categories/indumentaria`} className="dropdown-item">Indumentaria</NavLink>
                <NavLink to={`/categories/yoga`} className="dropdown-item">Yoga</NavLink>
              </div>
            </li>
          </ul>
        </div>
        <NavLink to={`/cart`}><CartIcon /></NavLink>
    </nav>
  )
}