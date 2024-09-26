import React from 'react'
import { Link} from 'react-router-dom'

const Brandicon = (props) => {
  const handlescroll = ()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div>
      <Link onClick={handlescroll} to={`/brands/${props.category}`} className='link'><div className='caticon' >
      <img src={props.image} alt="" />
      <p>{props.name}</p>
    </div>
    </Link>
    </div>
  )
}

export default Brandicon
