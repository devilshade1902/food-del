import React from 'react'
import { Link, useParams } from 'react-router-dom'
import categoryRest from '../assets/categoryRest';
import './Caticon_res.css'
import brands from '../assets/brands.js';
import restaurant from '../assets/restaurant.js';

const Caticon_res = () => {
  const {categoryname} = useParams();
  
  const filtercategory = categoryRest.filter((rest)=>rest.category===categoryname)
  const handlescroll = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div >
      
    <h1 className='catname'>{categoryname}</h1>
    <Link onClick={handlescroll} to='./catrest' style={{textDecoration:'none',color:'black'}}>
    <div className="catrestaurants">
    {filtercategory.map((restaurant)=>(
      <div className='restaurantsCat'>
      <img src={restaurant.image} alt="" className='catrestimg' />
      <p className='catrestname'>{restaurant.name}</p>
      <hr className='hr' />
      <p className='catrestaddress'>{restaurant.address}</p>
      </div>
    ))}
    </div>
    </Link>
    </div>
  )
}

export default Caticon_res
