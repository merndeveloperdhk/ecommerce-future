import Banner from "../Banner/Banner";
import Category from "../Categories/Category";
import Deals from "../Deals/Deals";
import ProductCategory from "../ProductCategory/ProductCategory";
import States from "../States/States";


const Home = () => {
    return (
        <div>
            <Category></Category>
            <Banner></Banner>
            <Deals></Deals>
            <ProductCategory></ProductCategory>
            <States></States>
        </div>
    );
};

export default Home;