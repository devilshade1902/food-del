import React from 'react'
import './Caticon.css'
import {Link} from 'react-router-dom'


const Caticon = (props) => {
  const handlescroll = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <Link onClick={handlescroll} to={`/restaurants/${props.category}`} className='link' ><div className='caticon' >
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
    </Link>
  )
}

export default Caticon
