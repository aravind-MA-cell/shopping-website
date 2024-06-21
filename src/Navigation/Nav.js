import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import './Nav.css';

function Nav() {
  return (
    <nav>
      <div className='nav-container'>
        <input type='search' placeholder='Enter Your Search Shoes'
             className='search-input' />
      </div>

      <div className='profile-container'>
        <a><IoHeartOutline className='nav-icons'/></a>
        <a><AiOutlineShoppingCart className='nav-icons' /></a>
        <a><AiOutlineUserAdd className='nav-icons'/></a>
      </div>
    </nav>
  )
}

export default Nav
