import DealsDay from "./DealsDay";
import Top100 from "./Top100";


const Deals = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2 bg-slate-200 h-[370px]">
            <div className="grid-cols-1 md:col-span-4 ">
            <DealsDay></DealsDay>
            </div>
            <div className="grid-cols-1 md:col-span-8 ">
            <Top100></Top100>
            </div>
        </div>
    );
};

export default Deals;