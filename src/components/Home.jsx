import React, { useState } from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Card from './Card'
import Heading from './Heading'
import data from '../assets/data.json';
import ProductSlider from './ProductSlider';
import SeeMore from './SeeMore';
import Title from './Title';
import Fotter from './Fotter';
const Home = () => {
  return (
   <div>
       <Navbar />
     <div className=' w-11/12 mx-auto'>
     <Header/>
      <ProductSlider />
        <Heading text={"xiv"} text1={"collections"}/>
    <div className="flex flex-wrap items-center justify-between gap-15 my-10">
      {data.slice(0, 10).map((item) => (
        <Card key={item.id} item={item}  />
      ))}
    </div>
    <SeeMore/>
    <Title/>
    <Fotter/>
    </div>
   </div>
  )
}

export default Home
