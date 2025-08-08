import React from 'react'
import first from "../assets/featured/first.png"
import second from "../assets/featured/second.png"
import third from "../assets/featured/third.png"
import fourth from "../assets/featured/fourth.png"
import Title from 'antd/es/typography/Title'
import CustomCard from './CustomCard'
import { useThemeStore } from '../stores/themeStore'

const cards = [
    {
        image: first,
        title: "Modern Sofa",
        description: "Comfortable and stylish"
    },
    {
        image: second,
        title: "Dining Table Set",
        description: "Elegant dining experience"
    },
    {
        image: third,
        title: "Bedroom Collection",
        description: "Relaxing bedroom essentials"
    },
    {
        image: fourth,
        title: "Outdoor Lounge",
        description: "Enjoy the outdoors in style"
    },
]

const FeaturedProducts = () => {
    const isDark = useThemeStore(state => state.isDark);

    return (
      <div className={`max-w-7xl mt-[4rem] grid ml-[2rem] transition-colors duration-0 ease-in-out ${isDark ? 'bg-black text-white' : 'bg-[#FCFAF7] text-black'}`}>
          <Title level={2}>Featured Products</Title>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {cards.map(({image, title, description})=>(
                  <CustomCard image={image} title={title} description={description}  />
              ))}
          </div>
      </div>
    )
}

export default FeaturedProducts