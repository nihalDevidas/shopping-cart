import {STORE_PRODUCTS, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART} from "./actionType"


// defining action creactors that return s an object to triger an action 


export const storeAllProducts = (productList)=>{
    return{
        type:STORE_PRODUCTS,
        productList: productList
    }
}


export const addItemToCart = (productId)=>{
    return{
        type:ADD_TO_CART,
        productId:productId
    }
}


export const removeAnItem = (itemId)=>{

    return{
        type:REMOVE_ITEM,
        itemId:itemId
    }
}


export const clearAllCartData = ()=>{
    return{
        type:CLEAR_CART
    }
}