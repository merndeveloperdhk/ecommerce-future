import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const ShopWithComplete = () => {
  const[products, setProducts] = useState([]);
  // products
  useEffect(()=>{
   fetch("/public/car.json")
   .then(res => res.json())
   .then(data => setProducts(data))
 },[]);

  return (
    <div className="space-y-4 bg-gray-200 p-2 ">
      <SectionTitle title="Shop with complete Confidence"></SectionTitle>
      {/* card section */}
      <div className="grid grid-cols-1 md:grid-cols-8 gap-2 ">
        {/* First */}
       

        {
          products.slice(0,8).map((product, idx) =>  <div key={idx} className="card bg-base-100 rounded-none text-center ">
          <figure>
            <img className="md:h-[80px] w-full  object-cover hover:scale-110 duration-300"
              src={product.image_url}
              alt="Shoes"
            />
          </figure>
          <Link to={`/productDetails/${product._id}`}> <h2 className=" font-semibold">{product.title}</h2></Link>
           
         
        </div>)
        }
        
      </div>
    </div>
  );
};

export default ShopWithComplete;
