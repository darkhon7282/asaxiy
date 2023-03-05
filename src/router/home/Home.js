import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Advices from '../../components/advices/Advices'
import Banner from '../../components/banner/Banner'
import Category from '../../components/category/Category'
import Products from '../../components/products/Products'
import "./Home.css"
function Home() {
  return (
    <div className='container'>
        <div className="home">
          <Banner/>
          <Category/>
          <Products/>
          <Advices/>
        </div>
    </div>
  )
}

export default Home