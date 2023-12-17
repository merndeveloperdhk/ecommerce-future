import { Link } from "react-router-dom";
import Latest from "./Latest";


const LatestProducts = () => {
    return (
        <div className="my-5 bg-gray-300 p-2">
            <div className="mb-3 font-semibold flex gap-3">
            <Link >Latest Products</Link>
            <Link>Best Selling</Link>
            <Link>Featured Products</Link>
            </div>
            {/* Products */}
            <Latest></Latest>
        </div>
    );
};

export default LatestProducts;