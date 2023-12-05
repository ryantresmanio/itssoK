import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import svt from "../../assets/pictures/svt-new.jpg"
import enha from "../../assets/pictures/enha-new.jpg"
import rv from "../../assets/pictures/rv-new.jpg"
import aespa from "../../assets/pictures/aespa-new.jpg"
import logo from "../../assets/pictures/logo.jpg"
export const Shop = () => {
  return (
    <div className="shop">
      <h1 className="dreams">ENHYPEN</h1>
      <div className="shopTitle">
        <p className="dreams">"is back with 'Orange Blood' – the latest album you've been waiting for! Dive into the beats, feel the vibes <br></br>– it's the soundtrack of the season!".</p>
        <img src={enha} alt="" />
        <p className="dreams">Other featured artists this month</p>
        <img src={svt} alt="" />
        <img src={rv} alt="" />
        <img src={aespa} alt="" />
      </div>
      <div className="logoo">
        <img src={logo} alt="" />
      </div>
      
      <div className="products">
        
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
