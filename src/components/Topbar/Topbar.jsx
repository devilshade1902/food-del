import React, { useState } from 'react'
import { MdDeliveryDining } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import './Topbar.css'
import { Link } from 'react-router-dom';


const Topbar = () => {
    const [activeNav,SetActiveNav] = useState('active')
    return (
        <div className='topbar'>
            <div className="delivery">
            <MdDeliveryDining className={activeNav==='active'?'active':'delivery'}/>
             <p onClick={()=>{SetActiveNav('active')}}><Link to='/' style={{textDecoration:"none",color:"black"}}>Delivery</Link></p>
            </div>
            <div className="dineout">
            <IoFastFoodSharp className={activeNav==='dineactive'?'active':<></>}/>
            <Link to='/dineout'style={{textDecoration:"none",color:"black"}}><p onClick={()=>{SetActiveNav('dineactive')}}>Dining Out</p></Link>
            </div>
        </div>
    )
}

export default Topbar
