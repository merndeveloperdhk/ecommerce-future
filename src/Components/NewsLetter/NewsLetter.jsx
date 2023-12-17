import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const NewsLetter = () => {
  const handleNewsLetter = e => {
      e.preventDefault();
      const email = e.target.email.value;
      console.log(email);
  }
  return (
    <div className="flex flex-col justify-center md:flex-row gap-3 md:justify-between bg-[#336699] px-2 py-6 md:w-full">
      <div className="flex gap-2 items-center md:w-1/2">
        <AiOutlineMail className="text-5xl"></AiOutlineMail>
        <div>
          <h1 className="text-xl font-semibold">Subscribe to our newsletter</h1>
          <h1 className="texl-lg">getmailksjf sldfskfjsd l; dfssdf</h1>
        </div>
      </div>

      <form  onSubmit={handleNewsLetter} className="join md:w-1/2 flex">
        <input
          className="input input-bordered join-item w-full md:max-w-[450px] "
          placeholder="Email"
          name="email"
        />
        <button className="btn join-item  rounded-r-md bg-black md:bg-gray-400 text-white md:text-black border-none md:px-4">
          Subscribe <BsArrowRight className="text-2xl ml-1"></BsArrowRight>
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
