import React from "react"
import NavBar from  "./components/NavBar";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage"
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
     <NavBar/>

      <Routes>
        <Route path = "/shopping-cart/" element = { <HomePage/>} />
        <Route path = "/cart" element = {<CartPage/>}/>
      </Routes>
        
    </div>
  );
}

export default App;
