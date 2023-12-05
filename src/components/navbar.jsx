import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import {Envelope} from "phosphor-react";
import "./navbar.css";
import logo from '../assets/pictures/logo.png';


export const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <div className="links">
        <Link to="/"><p className="dreams">Home </p></Link>
        <Link to="/newrelease"><p className="dreams">New Releases </p></Link>
        <Link to="/album"><p className="dreams">Albums </p></Link>
        <Link to="/others"><p className="dreams">Others </p></Link>
        <Link to="/cart">
          <ShoppingCart className="icon" size={25}/>
        </Link>
        <Link to="/contact">
        <Envelope className="icon" size={25} />
        </Link>
      </div>
    </div>
  );
};
