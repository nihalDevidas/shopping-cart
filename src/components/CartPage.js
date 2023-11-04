import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import{removeAnItem, clearAllCartData} from "../redux/actions/cartActions"



const CartPage = () => {

   const dispatch = useDispatch()
   const cartdata = useSelector(state=>state)
   const{cartList} = cartdata

  return (
    <div className='cart-page-con'>
       <div className='cart-grid-con'>

        {
            cartList.length > 0 && cartList.map((productObj)=>(

                <div className='product-card' id={productObj.id} key={productObj.id}>

                    <div className='img-con'>
                        <img className='card-img' src={productObj.image}/>
                    </div>

                    <div className='title'>title:{productObj.title}</div>
                    <div className='price'>Price:{productObj.price}</div>

                    <button className='btn3' onClick = {()=>dispatch(removeAnItem(productObj.id))}>remove from Cart</button>
                </div>
            ))
        }

       </div>

       <div className='price-list'>
            <ul>
                {
                    cartList.length >0 && cartList.map((productObj)=>(
                        <li id ={productObj.id}>
                            <span>
                               {productObj.title}
                            </span>
                            <span>
                              {productObj.price}
                            </span>
                        </li>
                    ))
                }
            </ul>

            {cartList.length > 0 && <button onClick = {()=>dispatch(clearAllCartData())}>chech out</button>}
       </div>
    </div>
  )
}

export default CartPage