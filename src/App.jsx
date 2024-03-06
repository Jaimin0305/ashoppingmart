import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Home from './components/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>

      <Route path='/' exact element={<Home/>}/>
      <Route path='/cart' exact element={<Cart/>}/>
      
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;
