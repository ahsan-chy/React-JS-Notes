import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-head'>
        <span className='logo'>Redux Store</span>

        <div>
            <Link className='nav-link' to="/"> Home </Link>
            <Link className='nav-link' to="/shop"> Shop </Link>
            <Link className='nav-link' to="/cart"> Cart </Link>

        <span className='cart-count'>Cart item: 0</span>
        </div>


    </div>
  )
}

export default Navbar