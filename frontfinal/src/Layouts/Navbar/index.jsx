import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__container__title'>
          Floral Studio
        </div>
        <div className='navbar__container__items'>
          <ul className='navbar__container__items__list'>
            <NavLink to={"/"}><li>Home</li></NavLink>
            <li>About us</li>
            <li>Portfolio</li>
            <li>Pricing</li>
            <li>Contacts</li>
            <NavLink to={"/AddPage"}><li>Add</li></NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar