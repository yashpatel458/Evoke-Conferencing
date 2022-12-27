import React from "react";
import Navbar from "./Navbar";
import MainImage from "../images/MainImage.gif"

function Header() {
  return (
    <div id="main">
      <Navbar/>
      <div className='name'>

          <div className='mainText'>
          <h1>Fast Reliable and <span>Secure</span> Conferencing!</h1>
          <a target="_blank" href="https://link-up-chat.netlify.app/" className='cv-btn'>Create Meeting</a>
          </div>
          
          <div className='mainImage'>
          <img src={MainImage} alt='Video Conference Graphics'/>
          </div>

      </div>
    </div>
  );
}

export default Header;