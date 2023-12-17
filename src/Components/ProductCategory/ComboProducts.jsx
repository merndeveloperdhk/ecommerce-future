import { IoIosArrowForward } from "react-icons/io";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ComboProducts = () => {
  const[products, setProducts] = useState([]);
   // products
   useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);
  
  return (
    <div className=" space-y-4  bg-gray-200 p-2 my-4">
      <div className="flex justify-between items-center mb-2">
        {/* <h1 className="text-xl font-bold">Combo Products</h1> */}
        <SectionTitle title="Combo Products"></SectionTitle>
        <div className="flex gap-1 items-center">
          <h1>View All </h1>
          <IoIosArrowForward />
        </div>
      </div>
      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
      {
            products.slice(0,6).map((product, idx) => <div key={idx} className="card card-compact  bg-base-100 rounded-none">
            <figure>
              <img className="hover:scale-110 duration-300 w-full object-cover h-24" src={product.image_url} alt="Shoes" />
            </figure>
  
            <div className="card-body">
              <Link to={`/productDetails/${product._id}`}><h2 className="hover:text-green-600 duration-300 font-semibold">{product.title}</h2></Link>
              {/* Ratings */}
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                ( {product.reviews} )
              </div>
              <div className="card-actions justify-end">
                <p>$ {product.price}</p>
                <p className="line-through">${product.price}</p>
              </div>
            </div>
            <p className="bg-red-500 text-white absolute px-2 right-2 top-1 ">{product.sale}</p>
          </div>)
          }
        
      </div>
    </div>
  );
};

export default ComboProducts;
