import React from "react"
import {STORE_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART} from "../actions/actionType"

let intialState = {
    productList: [],
    cartList: []
}


const cartReducer = (state = intialState, actions)=>{

      switch(actions.type){

        case STORE_PRODUCTS: 
                           return{...state, productList : [...actions.productList]};


        case ADD_TO_CART: 
                            let isPresent = false
                           state.cartList.length > 0 && state.cartList.map((obj)=>{
                                                  if(obj.id == actions.productId){
                                                    isPresent = true
                                                  }
                                                }) 

                            if(isPresent === false){
                              let productObj = state.productList.filter((obj)=>obj.id == actions.productId)  
                            
                                  return{...state,cartList : [...state.cartList, productObj[0]]};
                            }
                       return{...state}

                       

        case REMOVE_ITEM : 
                        let filteredList = state.cartList.filter((obj)=>obj.id !== actions.itemId)  
                        
                        return {...state, cartList:filteredList};

                        
        case CLEAR_CART : 
                         return{...state,cartList : []}               
         

        default:  return state;               
      }
}

export default cartReducer;