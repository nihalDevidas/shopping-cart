import React,{useEffect,useState} from 'react'
import axios from "axios"




const HomePage = () => {

    const[products, setProducts] = useState([])

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
          console.log(Products)
       })
       .catch((error)=>{
            console.log(error)
       })

   },[])

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

                    <button className='btn3'>Add to Cart</button>
                </div>
            ))
        }

       </div>
    </div>
  )
}

export default HomePage