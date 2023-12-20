

const LoadingSpeaner = () => {
    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-250px)]">
            <p className="text-7xl font-thin ">L</p>
            <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin mt-5 border-blue-800"></div>
            <p className="text-7xl font-thin">adding...</p>
        </div>
    );
};

export default LoadingSpeaner;