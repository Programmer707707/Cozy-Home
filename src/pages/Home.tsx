import React from 'react'
import Layout from '../customComponents/Layout'
import Slider from '../customComponents/Slider'
import FeaturedProducts from '../customComponents/FeaturedProducts'
import StayUpdated from '../customComponents/StayUpdated'

const Home = () => {
  return (
    <Layout>    
      <Slider/>
      <FeaturedProducts/>
      <div className=''>
        <StayUpdated/>
      </div>
    </Layout>
  )
}

export default Home