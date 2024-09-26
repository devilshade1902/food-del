import React from 'react'
import './Brandicon_res.css'
import { useParams } from 'react-router-dom'

import brands from '../assets/brands'
const Brandicon_res = () => {
  const {brandname} = useParams();
  const brandlist = brands.find((brand)=>brand.brand===brandname)
  
  return (
    <div className='restmenu'>
     <div className="menuimages">
      <img src={brandlist.logo} alt="" className='rest-img'/>
     </div>
     <div className="rest-name">
      {brandlist.brand}
     </div>
     <div className="dishes">
      {brandlist.menu.map((dish,index)=>(
        <div className="dish" key={dish.id}>
          <p>{dish.dish}</p>
          <p>{dish.price}</p>
        </div>
      ))}
     </div>
    </div>
  )
}

export default Brandicon_res
