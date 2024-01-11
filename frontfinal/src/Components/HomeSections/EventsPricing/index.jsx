import React from 'react'
import './style.scss'
const EventsPricing = () => {
  return (
    <section className='eventsPricing'>
    <div className='eventsPricing__container'>
    <div className='eventsPricing__container__title'>
        <div className='eventsPricing__container__title__subTitle'>
        Devoted to wonderful beauty
        </div>
        <div className='eventsPricing__container__title__name'>
        Events Pricing
        </div>
    </div>

    <div className='eventsPricing__container__cardsBox'>
        <div className='eventsPricing__container__cardsBox__card'>
        <div className='eventsPricing__container__cardsBox__card__content'>
        <div className='eventsPricing__container__cardsBox__card__content__price'>
            <span>$16</span>per table
        </div>
        <div className='eventsPricing__container__cardsBox__card__content__title'>
        Birthday Events
        </div>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop Now</button>
        </div>

        </div>


        <div className='eventsPricing__container__cardsBox__card'>
        <div className='eventsPricing__container__cardsBox__card__content'>
        <div className='eventsPricing__container__cardsBox__card__content__price'>
            <span>$31</span>per table
        </div>
        <div className='eventsPricing__container__cardsBox__card__content__title'>
        Wedding Events
        </div>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop Now</button>
        </div>

        </div>


        <div className='eventsPricing__container__cardsBox__card'>
        <div className='eventsPricing__container__cardsBox__card__content'>
        <div className='eventsPricing__container__cardsBox__card__content__price'>
            <span>$52</span>per table
        </div>
        <div className='eventsPricing__container__cardsBox__card__content__title'>
        Party    Events
        </div>
        <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
        <button>Shop Now</button>
        </div>

        </div>

    </div>
    </div>
    </section>
  )
}

export default EventsPricing