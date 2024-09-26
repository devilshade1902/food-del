import React from 'react'
import './Best_restaurant.css'
import {Link} from 'react-router-dom'

const Best_restaurant = (props) => {

  const handlescroll = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className='best-rest-container'>
      <Link onClick={handlescroll} to={`./bestrestaurants/${props.id}`} style={{textDecoration:'none', color:'black'}}>
      <div className="rest-img"><img src={props.image} alt="" className='img-rest' /></div>
      <div className="res-name">{props.name}</div>
      <hr />
      <div>{props.category}</div>
      <div className="cuisine">{props.cuisine}</div>
      <div className="city">{props.city}</div>
      </Link>
    </div>
  )
}

export default Best_restaurant
