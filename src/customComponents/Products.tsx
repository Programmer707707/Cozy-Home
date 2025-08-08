// import CustomCard from './CustomCard'
import product1 from "../assets/products/product1.png"
import product2 from "../assets/products/product2.png"
import product3 from "../assets/products/product3.png"
import product4 from "../assets/products/product4.png"
import product5 from "../assets/products/product5.png"
import product6 from "../assets/products/product6.png"
import product7 from "../assets/products/product7.png"
import product8 from "../assets/products/product8.png"
import product9 from "../assets/products/product9.png"
import product10 from "../assets/products/product10.png"
import { ThreeDCardDemo } from './ProductCard'

const data = [
  {
    image: product1,
    name: "Modern Sectional Sofa",
    cost: 1299,
  },
  {
    image: product2,
    name: "Classical Armchair",
    cost: 799,
  },
  {
    image: product3,
    name: "Mid-Century Table",
    cost: 349,
  },
  {
    image: product4,
    name: "Scandinavian TV Stand",
    cost: 449,
  },
  {
    image: product5,
    name: "Velvet Accent Chair",
    cost: 549,
  },{
    image: product6,
    name: "Industrial Bookshelf",
    cost: 249,
  },{
    image: product7,
    name: "Geometric Area Rug",
    cost: 149,
  },{
    image: product8,
    name: "Minimalist Floor Lamp",
    cost: 149,
  },{
    image: product9,
    name: "Modern Sofa",
    cost: 1049,
  },{
    image: product10,
    name: "Outdoor Lounge Sofa",
    cost: 1549,
  },

]


const Products = () => {
  return (
    <div className='mt-10 grid grid-cols-4 md:grid'>
        {data.map((e,index) => (
          <div className='p-3' key={index}>
            {/* <CustomCard image={e.image} title={e.name} description={`$${e.cost}`} /> */}
            <ThreeDCardDemo
              key={index}
              title={e.name}
              description={e.cost.toString()}
              image={e.image}
              link={`/products/${index}`} // or some actual link
            />
          </div>
        ))}

    </div>
  )
}

export default Products