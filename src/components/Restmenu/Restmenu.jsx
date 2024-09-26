import React from 'react'
import './Restmenu.css'
import { useParams } from 'react-router-dom'
// import categoryRest from '../assets/categoryRest';
import restaurant from '../assets/restaurant';
const Restmenu = () => {
  const {restaurantId} = useParams();
  const rest =restaurant.find((restaurant)=>restaurant.id===Number(restaurantId))
  
  // console.log(menu)
  return (
    <div className='restmenu'>
     <div className="menuimages">
      <img src={rest.image} alt="" className='rest-img'/>
     </div>
     <div className="rest-name">
      {rest.name}
     </div>
     <div className="rest-address">
      {rest.addres}<br/>
      {rest.city}
     </div>
     <div className="dishes">
      {rest.menu.map((dish,index)=>(
        <div className="dish" key={index}>
          <p>{dish.dish}</p>
          <p>₹{dish.price}</p>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Restmenu
