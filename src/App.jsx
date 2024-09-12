import React from 'react'
import Navbar from './components/Navbar'
import ItemList from './components/ItemList'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShoppingCart from './components/ShoppingCart'
import ShoppingCartProvider from './contexts/ShoppingCartContext'

const App = () => {
  // https://www.youtube.com/watch?v=15PFRItzs4w 
  // 23:39 / 37:19
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemList/>}/> 
          <Route path='/cart' element={<ShoppingCart/>}/> 
        </Routes>
      </Router>
    </ShoppingCartProvider>
  )
}

export default App