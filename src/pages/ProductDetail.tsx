// src/pages/ProductDetail.tsx
import { useParams, Link } from "react-router-dom";
import {data} from "../data";
import Layout from "../customComponents/Layout";

export default function ProductDetail() {
  const { id } = useParams(); // slug or id from the URL
  const product = data.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-xl">Product not found.</p>
        <Link to="/shop" className="text-blue-600 underline">Back to Shop</Link>
      </div>
    );
  }

  return (
    <Layout>
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 mt-5">
          <img src={product.image} alt={product.name} className="w-full rounded-xl object-cover shadow-xl" />
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-2xl mb-4">${product.cost}</p>
            <p className="mb-6 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam sapiente mollitia perspiciatis accusantium distinctio eveniet quae numquam tenetur adipisci facilis, ducimus corrupti minus eligendi natus earum eum consectetur aliquid voluptas?</p>

            <div className="flex gap-3">
              <button className="rounded-lg bg-orange-300 px-5 py-2 cursor-pointer"><span className="text-black">Add to Cart</span></button>
              <Link to="/shop" className="px-5 py-2 rounded-lg border">Back to Shop</Link>
            </div>
          </div>
        </div>
    </Layout>
  );
}
