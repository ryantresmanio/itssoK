import React from 'react'
import enha from "../assets/pictures/enha-new.jpg"
import svt from "../assets/pictures/svt-new.jpg"
import rv from "../assets/pictures/rv-new.jpg"
import aespa from "../assets/pictures/aespa-new.jpg"
import "../pages/newrelease.css"


export const Newrelease = () => {
  return (
    <div className="newrelease">
    <div className="pictures">
      <img src={enha} alt="" />
      <img src={svt} alt="" />
      <img src={rv} alt="" />
      <img src={aespa} alt="" />



    </div>
    </div>
  )
}
