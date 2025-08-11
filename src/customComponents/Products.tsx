// import CustomCard from './CustomCard'
import { ThreeDCardDemo } from "./ProductCard";
import { data } from "../data";

const Products = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 mt-10">
      <div
        className="
          mx-auto max-w-7xl
          grid gap-4 sm:gap-6 lg:gap-8
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
          justify-items-center
        "
      >
        {data.map((p) => (
          <div
            key={p.id}
            className="w-full max-w-[18rem]" 
          >
            <ThreeDCardDemo
              title={p.name}
              description={p.cost.toString()}
              image={p.image}
              link={`/shop/${p.id}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;


/* <CustomCard image={e.image} title={e.name} description={`$${e.cost}`} /> */
