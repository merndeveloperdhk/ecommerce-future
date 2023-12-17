import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Top100 = () => {
  const [categories, setCategories] = useState([]);
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // products
  useEffect(()=>{
    fetch("/public/car.json")
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="h-[350px] p-2 ">
      <div className="flex justify-between  py-4">
        <h1 className="text-xl font-semibold">Top 100 :{products.length}</h1>
        <ul className="flex gap-2">
          {
            categories.slice(1,6).map(category => <NavLink
               key={category._id}
               to="productDetails"
               className="font-semibold"
               >{category.name}</NavLink>)
          }
        
        </ul>
      </div>
      {/* Carts */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pb-2">
        {/* first */}
          {
            products.slice(0,5).map((product, idx) => <div key={idx} className="card card-compact  bg-base-100 rounded-none">
            <figure>
              <img className="hover:scale-110 duration-300 w-full object-cover h-20" src={product.image_url} alt="Shoes" />
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
      {/*bottom banner */}
      <div className="h-[90px]">
        <img className=" h-full w-full object-cover overflow-hidden"  src="https://i.ibb.co/93NBX8Z/banner2.png" alt="" />
      </div>
    </div>
  );
};

export default Top100;
