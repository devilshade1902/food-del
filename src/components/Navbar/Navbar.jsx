import React from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>FOODIE</p>
      </div>
      <div className="searchbar">
        <IoSearch className='icon' />
        <input type="text" />
      </div>
      <div className="nav-login">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
