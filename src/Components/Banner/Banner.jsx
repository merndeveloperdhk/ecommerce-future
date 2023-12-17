import BannerBottom from "./BannerBottom";
import BannerMiddle from "./BannerMiddle";
import BannerTop from "./BannerTop";

const Banner = () => {
  return (
    <div className="">
      <div
        className="hero min-h-[550px] "
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="w-full h-full flex flex-col justify-between text-center text-neutral-content p-4">
         
            <BannerTop></BannerTop>
            <BannerMiddle></BannerMiddle>
            <BannerBottom></BannerBottom>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
