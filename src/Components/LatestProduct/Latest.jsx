import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Latest = () => {
  const[products, setProducts] = useState([]);
   // products
   useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
             {/* first */}
        <div className="card card-compact  bg-base-100 rounded-none">
          
           <figure className="h-full">
           <img  className="h-full object-cover hover:scale-110 duration-300" src="https://i.ibb.co/vd1ZDbD/whychoose1.png" alt="Shoes" />
           </figure>
          
        </div>
        {
            products.slice(0,5).map((product, idx) => <div key={idx} className="card card-compact  bg-base-100 rounded-none">
            <figure>
              <img className="hover:scale-110 duration-300 w-full object-cover h-28" src={product.image_url} alt="Shoes" />
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

export default Latest;