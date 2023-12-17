import { FaRetweet } from "react-icons/fa";
const ProductImg = () => {
  return (
    <div>
      <div className=" mb-3">
        <img
          className="rounded-md hover:scale-105 duration-300 overflow-hidden"
          src="https://i.ibb.co/T0MYG0m/5.jpg"
          alt="Shoes"
        />
      </div>
      <div className="mb-3 ">
        <img
          className="rounded-md hover:scale-105 duration-300 overflow-hidden"
          src="https://i.ibb.co/F3ZHyTw/bike9.jpg"
          alt="Shoes"
        />
      </div>
      <div className="flex items-center gap-1 justify-center">
    <FaRetweet className="text-xl"></FaRetweet>
      <h1 className="font-bold">Shopping Tweet</h1>
      </div>
    </div>
  );
};

export default ProductImg;
