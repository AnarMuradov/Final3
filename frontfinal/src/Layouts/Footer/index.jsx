import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__container__mail'>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />

          <form action="#">
          <input type="email" placeholder='Your Email'/> 
          <button>Send</button>
          </form>
        </div>

        <div className='footer__container__items'>
        <div className='footer__container__items__about'>
          <h3>About</h3>
        <ul className='footer__container__items__about__list'>
          <li>About Us</li>
          <li>Our Partners</li>
          <li>Our Services</li>
          </ul>
        </div>

        <div className='footer__container__items__contact'>
          <h3>Contact</h3>
        <ul className='footer__container__items__contact__list'>
          <li>Contact Us</li>
          <li>FAQ Page</li>
          <li>About Me</li>
          </ul>
        </div>

        <div className='footer__container__items__followUs'>
          <h3>Follow Us</h3>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer