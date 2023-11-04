import React,{useEffect,useState} from 'react'
import axios from "axios"
import {storeAllProducts, addItemToCart} from "../redux/actions/cartActions"
import {useDispatch, useSelector} from 'react-redux'



const HomePage = () => {

    const[products, setProducts] = useState([])
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    
   useEffect(()=>{

    let info = axios.get("https://dummyjson.com/products");

       info.then((response)=>{

          let Products = response.data.products.map((obj)=>{
            return{
                id:obj.id,
                image:obj.images[0],
                title:obj.title,
                price:obj.price
            }
          })
          setProducts(Products)
          //console.log(Products)
          dispatch(storeAllProducts(Products)) // store products in store
       })
       .catch((error)=>{
            console.log(error)
       })

   },[])

   console.log(data)

  return (
    <div className='home-page-con'>
       <div className='home-grid-con'>

        {
            products.length > 0 && products.map((productObj)=>(

                <div className='product-card' id={productObj.id} key={productObj.id}>

                    <div className='img-con'>
                        <img className='card-img' src={productObj.image}/>
                    </div>

                    <div className='title'>title:{productObj.title}</div>
                    <div className='price'>Price:{productObj.price}</div>

                    <button className='btn3' onClick = {()=>dispatch(addItemToCart(productObj.id))}>Add to Cart</button>
                </div>
            ))
        }

       </div>
    </div>
  )
}

export default HomePage