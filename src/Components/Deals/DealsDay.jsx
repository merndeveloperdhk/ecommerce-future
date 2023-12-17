import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DealsDay = () => {
  const[products, setProducts] = useState([]);
  

   // products
   useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  return (
    <div className="h-[350px]  ">
      <div className="text-center py-4">
        <h1 className="text-xl font-semibold">Deals of the day</h1>
        <p>Score upto 80% off while these deals last</p>
      </div>
      {/* Deal image */}
      <div className="grid grid-cols-1 md:grid-cols-2   gap-2 ">
        {
          products.slice(4,6).map(product =><div key={product._id} className="card card-compact  bg-base-100  p-2 rounded-none ">
          <figure>
            <img className="hover:scale-110 duration-300 w-full object-cover h-24"  src={product.image_url} alt="Shoes" />
          </figure>

          <div className="card-body">
            <Link to={`/productDetails/${product._id}`}><h2 className="font-semibold text-lg">{product.title}</h2></Link>
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
              ( {product.reviews})
            </div>
            <div className="card-actions justify-end">
              <p>$ {product.price}</p>
              <p className="line-through">$ {product.price}</p>
            </div>
            {/* Countdown */}
            <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-2xl">
                  <span style={{ "--value": 15 }}></span>:
                </span>
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-2xl">
                  <span style={{ "--value": 10 }}></span>:
                </span>
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-2xl">
                  <span style={{ "--value": 24 }}></span>:
                </span>
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-2xl">
                  <span style={{ "--value": 45 }}></span>
                </span>
              </div>
            </div>
            <hr className="border-1 border-red-600 " />
          </div>

          <p className="bg-red-500 text-white absolute px-2 right-2">{product.sale}</p>
        </div> )
        }
        
        
      </div>
    </div>
  );
};

export default DealsDay;
