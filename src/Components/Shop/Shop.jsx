import { Helmet } from "react-helmet-async";
import ProductImg from "../ProductCategory/ProductImg";
import RightProduct from "../ProductCategory/RightProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // products
  useEffect(() => {
    fetch("/public/car.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 mt-4 gap-2">
      <Helmet>
        <title>Shop | Welcome to my site</title>
      </Helmet>
      
      {/* left side */}
      <div className="col-span-2">
        <RightProduct></RightProduct>
      </div>
      {/* middle side */}
      <div className="col-span-8">
        <div role="tablist" className="tabs  mb-4">
          {
            categories.map(Category => <a 
            key={Category._id}
             role="tab" className="tab text-xs p-[8px] ">
            {
              Category.name
            }
          </a>)
          }


         
        </div>
        {/* shop */}
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-2">
        {/*  */}
        {products.map((product, idx) => (
          <div key={idx} className="card card-compact  bg-base-200 rounded">
            <figure>
              <img
                className="hover:scale-110 duration-300 w-full object-cover h-24"
                src={product.image_url}
                alt="Shoes"
              />
            </figure>

            <div className="card-body">
              <Link to={`/productDetails/${product._id}`}>
                <h2 className="hover:text-green-600 duration-300 font-semibold">
                  {product.title}
                </h2>
              </Link>
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
            <p className="bg-red-500 text-white absolute px-2 right-2 top-1 ">
              {product.sale}
            </p>
          </div>
        ))}
      </div>
      </div>
      
      {/* Right side */}
      <div className="col-span-2">
        <ProductImg></ProductImg>
      </div>
    </div>
  );
};

export default Shop;
