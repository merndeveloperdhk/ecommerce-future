import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RelatedProduct = () => {
  const[products, setProducts] = useState([]);
   // products
   useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
      {/* first */}
      {
            products.slice(0,4).map((product, idx) => <div key={idx} className="card card-compact  bg-base-100 rounded-none">
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
  );
};

export default RelatedProduct;
