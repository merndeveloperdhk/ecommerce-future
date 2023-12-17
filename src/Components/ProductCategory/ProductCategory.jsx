import LatestProducts from "../LatestProduct/LatestProducts";
import ComboProducts from "./ComboProducts";
import ProductImg from "./ProductImg";
import RightProduct from "./RightProduct";
import ShopWithComplete from "./ShopWithComplete";

const ProductCategory = () => {
  return (
    <div className="grid md:grid-cols-12 gap-3">
      <div className="md:col-span-9 w-full">
        <ComboProducts></ComboProducts>
        <ShopWithComplete></ShopWithComplete>
        <LatestProducts></LatestProducts>
      </div>
      {/* Right */}
      <div className="md:col-span-3 p-2 w-full">
        <ProductImg></ProductImg>
        <RightProduct></RightProduct>
      </div>
    </div>
  );
};

export default ProductCategory;
