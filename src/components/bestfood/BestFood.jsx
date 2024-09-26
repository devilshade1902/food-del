import React from 'react'
import restaurant from '../assets/restaurant'
import Best_restaurant from '../best_restaurant/Best_restaurant'
import './BestFood.css'

const BestFood = () => {
  return (
    <div className='bestfood-container'>
      <h1>Best Food In Mumbai</h1>
      <div className="bestrestaurant">
        {
          restaurant.map((item)=>{
            return<Best_restaurant name={item.name} cuisine={item.cuisine} city={item.city}image={item.image} id={item.id}/>
          })
        }
      </div>
    </div>
  )
}

export default BestFood
