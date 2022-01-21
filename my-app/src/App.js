import React, { useEffect, useState } from 'react';
import axios from 'axios'


import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";

function App() { 

  const [isOpenCart, setIsOpenCart] = useState(false)
  const [data, setData] = useState([])
  const [cartItems, setCartItems] = useState([])

    useEffect( () => {

      fetch('https://ozon-8dbe8-default-rtdb.firebaseio.com/goods.json').then(res => res.json()).then(setData)
    }, [])


  const onToggleCart = () => {
    setIsOpenCart(prev => !prev)
  }

  const onAddItemToCart = (obj) => {
    setCartItems(prev => [...prev, obj])
  }

  const onDeleteItemToCart = (obj) => {
    console.log(obj)
  }

  return (

    <div className="App">
      <Header
      onToggleCart={onToggleCart}/>

      <Main 
      data ={data}
      onAddItemToCart ={onAddItemToCart}/>
          
      <Cart
      isOpenCart={isOpenCart}
      onToggleCart={onToggleCart}
      cartItems={cartItems}/>
   
    </div>
      
  )
}

export default App;
