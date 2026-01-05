
import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Card from './Card'
import Heading from './Heading'
import data from '../assets/data.json'
import ProductSlider from './ProductSlider'
import SeeMore from './SeeMore'
import Title from './Title'
import Fotter from './Fotter'

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      {/* Fixed Navbar */}
      <Navbar />

      {/* Content start after navbar */}
      <div className="pt-24">

        {/* Main container */}
        <div className="w-11/12 mx-auto">

          <Header />

          <ProductSlider />

          <div className="my-20">
            <Heading text="xiv" text1="collections" />
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 my-10">
            {data.slice(0, 10).map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>


          <SeeMore />
          <Title />

        </div>

        {/* Footer full width */}
        <Fotter />

      </div>
    </div>
  )
}

export default Home
