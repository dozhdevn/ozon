import React, { useEffect, useState } from 'react';
import axios from 'axios'


import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";

function App() { 

  const [isOpenCart, setIsOpenCart] = useState(false)
  const [data, setData] = useState([])
  const [filteredItems, setFiltredItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [filtredValue, setFiltredValue] = useState('')
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)


  useEffect( () => {

    const fetchData = async () => {
     await fetch('https://ozon-8dbe8-default-rtdb.firebaseio.com/goods.json').then(res => res.json())
      .then(setData)

      await fetch('https://ozon-8dbe8-default-rtdb.firebaseio.com/goods.json').then(res => res.json())
      .then(setFiltredItems)
    }
    fetchData()

    const cart = (localStorage.getItem('cart'))
    setCartItems(cart ? JSON.parse(localStorage.getItem("cart")) : [])
  }, [])

  useEffect ( () => {
    if (minValue === 0 && maxValue === 0){
      setFiltredItems(data)
    } else if (minValue !== 0 && maxValue === 0) {
      setFiltredItems(data.filter(item => item.price > minValue))      
    } else if (minValue === 0 && maxValue !== 0) {
      setFiltredItems(data.filter(item => item.price < maxValue))
    } else if (minValue !== 0 && maxValue !== 0) {
      console.log(123)
      setFiltredItems(data.filter(item => (item.price > minValue && item.price < maxValue)))
    }
  }, [data, minValue, maxValue])

  const onToggleCart = () => {
    setIsOpenCart(prev => !prev)
  }

  const onAddItemToCart = (obj) => {
    setCartItems(prev => [...prev, obj])

    localStorage.setItem("cart", JSON.stringify([...cartItems, obj]))
  }

  const onDeleteItemToCart = (obj) => {
    const cart = cartItems.filter(item => item !== obj)
    setCartItems(cart)

    localStorage.setItem("cart", JSON.stringify(cart))
  }

  const onUpdateFiltredItems = (value) => {
    setFiltredValue(value)

    const newItems = data.filter(item => item.title.toLowerCase().includes(filtredValue.toLowerCase()))

    value === '' ? setFiltredItems(data) : setFiltredItems(newItems)
  }

  const onFilteredByPrice = (min, max) => {

    setMinValue(Number(min))
    setMaxValue(Number(max))

  }


  const onChecked = (checked) => {
    if (checked) {
      setFiltredItems(filteredItems.filter(item => item.sale === checked))
    } else {
      setFiltredItems(data)
    }
  }

  const onFiltredItemsByCategory = (target) => {
    if (target.tagName === 'LI') {
      setFiltredItems(data.filter(item => item.category === target.textContent))
    }

    if (target.textContent === 'Все товары') {
      setFiltredItems(data)
    }

  }


  return (

    <div className="App">
      <Header
      cartItems = {cartItems}
      onUpdateFiltredItems = {onUpdateFiltredItems}
      onToggleCart={onToggleCart}
      onFiltredItemsByCategory={onFiltredItemsByCategory}/>

      <Main 
      filteredItems={filteredItems}
      onAddItemToCart ={onAddItemToCart}
      onChecked = {onChecked}
      onFilteredByPrice = {onFilteredByPrice}
      minValue = {minValue}
      maxValue = {maxValue}
      />
          
      <Cart
      isOpenCart={isOpenCart}
      onToggleCart={onToggleCart}
      cartItems={cartItems}
      onDeleteItemToCart = {onDeleteItemToCart}/>
    </div>
      
  )
}

export default App;
