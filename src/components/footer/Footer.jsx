import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import './Footer.css'
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="footer-content">
        <div className="footername">
            <p>FOODIE</p>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="/bestrestaurants">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaSquareFacebook/></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Foodie. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
