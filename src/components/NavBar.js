import React from 'react'
import {useNavigate} from "react-router-dom"

const NavBar = () => {

   let navigate = useNavigate()

  return (
    <div className='nav-con'>
        <h2>Shoping Cart</h2>
        <div>
            <button className='btn1' onClick = {()=>navigate("/shopping-cart/")}>Home page</button>
            <button className='btn1' onClick = {()=>navigate("/cart")}>Cart Page</button>
        </div>
    </div>
  )
}

export default NavBar