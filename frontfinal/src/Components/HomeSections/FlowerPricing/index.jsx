import React, { useEffect, useState } from 'react'
import './style.scss'
const FlowerPricing = () => {
    const [api, setApi] = useState([])
    const [property, setProperty] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:3001")
        .then((res)=>res.json())
        .then(data=>setApi(data))
    }, [])
    

  return (
    <section className='flowerPricing'>
    <div className='flowerPricing__container'>
    <div className='flowerPricing__container__title'>
        <div className='flowerPricing__container__title__subTitle'>
        Devoted to wonderful beauty
        </div>
        <div className='flowerPricing__container__title__name'>
        Flowers Pricing
        </div>
    </div>
    <div className='flowerPricing__container__filter'>
        <button onClick={()=>setProperty({property:"price",asc:true})}>Filter by price</button>
    </div>

    <div className='flowerPricing__container__cardsBox'>
    {api
    .sort((a,b) =>property !==null ?(
       (a[property.asc] > b[property.asc]) ? 1 : ((b[property.asc] > a[property.asc]) ? -1 : 0)):0
    
)
    .map((x)=>{
        return(
            <div key={x._id} className='flowerPricing__container__cardsBox__card'>
                <img  src={x.img} alt="" />
                <h2>{x.name}</h2>
                <span>${x.price}</span>
            </div>
        )
    })}
    </div>

    </div>
    </section>
  )
}

export default FlowerPricing