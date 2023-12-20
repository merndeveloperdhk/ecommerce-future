import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BannerMiddle = () => {
  const [categories, setCategories] = useState([]);
  const[products, setProducts] = useState([]);
   // products
   useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[]);

  useEffect(()=>{
    fetch('/public/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-12 md:h-[350px] gap-2 py-2 ">
      <div className="col-span-3 ">
        
       <ul className="leftMenu">
       
        {
          categories.map(category => <Link
             key={category._id}
             to="/shop"
             ><li>{category.name}</li></Link>
             )
        }
       </ul>
      </div>
      {/* middle side */}
      <div className=" col-span-6  ">
        <img  src="https://i.ibb.co/XYkmgfG/food1.jpg" className=" w-full h-[350px] object-cover  " alt="" />
      </div>

      {/* Right side */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2">
       
        {
            products.slice(0,4).map((product, idx) => <div key={idx} className="card  card-compact text-black bg-base-100 rounded-none">
            <figure>
              <img className="hover:scale-110 duration-300 md:w-full object-cover md:h-16" src={product.image_url} alt="Shoes" />
            </figure>
  
            <div className="md:card-body ">
              <Link to={`/productDetails/${product._id}`}><h2 className="hover:text-green-600 duration-300 font-semibold ">{product.title}</h2></Link>
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
                ({product.reviews})
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

export default BannerMiddle;
