import {createStore} from "redux"
import cartReducer from "../redux/reducer/cartReducer"


let store = createStore(cartReducer)


export default store;