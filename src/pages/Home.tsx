import React from 'react'
import Layout from '../components/Layout'
import Slider from '../components/Slider'
import FeaturedProducts from '../components/FeaturedProducts'
import StayUpdated from '../components/StayUpdated'

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