import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="">
      <h1 className="text-xl font-bold mb-2">
        Browse by Category {categories.length}
      </h1>
              
          <div className="grid grid-cols-2 gap-1 mb-1 md:grid-cols-4 md:gap-4 ">
            {categories.map((category) => (
              <Link
                key={category._id}
                to="/shop"
                className="flex  gap-3 border py-2 ps-2 bg-slate-100"
              >
                <div className="w-16 h-12">
                  <img
                    className="rounded h-full object-cover"
                    src={category.icon}
                    alt=""
                  />
                </div>
                <div className="">
                  <h1 className="font-semibold">{category.name}</h1>
                  <h1>Total Add: {category.add}</h1>
                </div>
              </Link>
            ))}
          </div>
    </div>
  );
};

export default Category;
