// import CustomCard from './CustomCard'
import { ThreeDCardDemo } from './ProductCard'
import { Link } from "react-router-dom"
import {data} from "../data";


const Products = () => {
  return (
    <div className='mt-10 grid grid-cols-4 md:grid'>
        {data.map((e,index) => (
          <div className='p-3' key={index}>
            {/* <CustomCard image={e.image} title={e.name} description={`$${e.cost}`} /> */}
            <Link key={e.id} to={`/shop/${e.id}`} className="block">
              <ThreeDCardDemo
                title={e.name}
                description={e.cost.toString()}
                image={e.image}
              />
            </Link>
          </div>
        ))}

    </div>
  )
}

export default Products