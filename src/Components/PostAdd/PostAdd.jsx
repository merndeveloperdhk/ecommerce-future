import { MdVerifiedUser, MdLocationOn  } from "react-icons/md";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PostAdd = () => {
  const{user} = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(()=>{
    fetch('/public/categories.json')
    .then(res => res.json())
    .then(data => setCategories(data))
  },[]);


  
  const handlePost = e => {
    e.preventDefault();
    const landSize = e.target.landSize.value;
    const houseSize = e.target.houseSize.value;
    const title = e.target.title.value;
    const description = e.target.description.value;
    const amount = e.target.amount.value;
    const negotiable = e.target.negotiable.checked;
    const accepted = e.target.terms.checked;
    const posts = {landSize,houseSize,title,description,amount,negotiable, accepted}
    console.log(posts);
  }
  return (
    <div>
      <Helmet>
        <title>Post Add | Welcome to my site</title>
      </Helmet>
        <div className="divider"></div>
        <div className="flex justify-between px-4">
            <h1 className="text-2xl font-bold">Fill The details</h1>
            <div className="flex gap-6 font-bold items-center text-xl">
                <div className="flex gap-1 items-center">
                <MdLocationOn className="text-[#149777]"/>
                <h1>Location</h1>
                </div>
                <h1>category</h1>
            </div>
        </div>
        <div className="divider"></div>
      <form onSubmit={handlePost}>
       
      <div className="md:w-3/6 mx-auto md:px-0 px-2">
         {/* category */}
         <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category </span>
            </label>
         
             <select className="select select-bordered">
              <option disabled selected>
                Select Category
              </option>
              
              {
                categories.map(category => <option 
                  key={category.id} 
                
                >{category.name}</option>)
              }
              
            </select>
          </div>
        {/* category */}
        <div className="flex justify-center gap-4 ">
          {/* Beds */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Beds</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Beds
              </option>
              {
                categories.slice(0,5).map(category => <option 
                  key={category._id} 
                
                >{category._id}</option>)
              }
            </select>
          </div>
          {/* Baths */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Baths</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Baths
              </option>
              {
                categories.slice(0,4).map(category => <option 
                  key={category._id} 
                
                >{category._id}</option>)
              }
            </select>
          </div>
        </div>
        {/* Land size */}
        <div className="flex justify-center gap-4 w-full ">
          <div className="form-control  w-3/4 ">
            <label className="label">
              <span className="label-text">Land Size</span>
            </label>
            <input
              type="text"
              name="landSize" id="landSize"
              placeholder="What's the size of your land?"
              className="input input-bordered w-full "
            />
          </div>
          {/* right */}
          <div className="form-control md:w-1/4 max-w-xs">
            <label className="label">
              <span className="label-text">Unit</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Katha
              </option>
              <option>Bigha</option>
              <option>Acres</option>
              <option>Shotok</option>
              <option>Decimal</option>
            </select>
          </div>
        </div>
        {/* House size */}
        <div className="flex justify-center gap-4 w-full ">
          <div className="form-control  w-3/4 ">
            <label className="label">
              <span className="label-text">House Size (Optional)</span>
            </label>
            <input
              type="text"
              name="houseSize" id="houseSize"
              placeholder="What's the size of your house?"
              className="input input-bordered w-full "
            />
          </div>
          {/* right */}
          <div className="form-control md:w-1/4 max-w-xs">
            <label className="label">
              <span className="label-text">Unit</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Sqft
              </option>
              <option>Bigha</option>
              <option>Acres</option>
              <option>Shotok</option>
              <option>Decimal</option>
            </select>
          </div>
        </div>
        {/* Title */}
        <div className="form-control md:w-full ">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title" id="title"
            placeholder="Keep it short!"
            className="input input-bordered md:w-full "
          />
        </div>
        {/* Description Text area */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
            <span className="label-text-alt">0/5000</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            name="description" id="description"
          ></textarea>
        </div>
        {/* Price */}
        <div className="form-control md:w-full ">
          <label className="label">
            <span className="label-text">Rent (tk)/ Per Month</span>
          </label>
          <input
            type="text"
            name="amount" id="amount"
            placeholder="What's the rent of the property"
            className="input input-bordered md:w-full "
          />
        </div>
        {/* negotiable */}
        <div className="flex gap-3 mt-3">
          <input type="checkbox" name="negotiable" id="negotiable"/>
          <label htmlFor="">Negotiable</label>
        </div>
      </div>
      <div className="divider"></div>
      <div className="md:w-3/6 mx-auto md:px-0 px-2 space-y-4">
        <h1 className="text-xl font-bold">Add Upto 5 Photos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 gap-y-4">
          <div className="">
            <input type="file" />
          </div>
          <div>
            <input type="file" />
          </div>
          <div>
            <input type="file" />
          </div>
          <div>
            <input type="file" />
          </div>
          <div>
            <input type="file" />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="md:w-3/6 mx-auto md:px-0 px-2 space-y-4">
        <h1 className="text-xl font-bold">Contact Details</h1>
        <div>
          <h1>Name</h1>
          {
            user ? <h1>{user.displayName}</h1>: " No User Name"
          }
          
        </div>
        <div>
          <h1>Email</h1>
          {
            user ? <h1>{user.email}</h1> :"No User Email"
          }
        </div>
        <div className="border rounded w-full p-3">
          <h1 className="mb-2">Phone Number</h1>
          <div className="flex justify-between w-3/4 items-center">
            <div className="flex items-center gap-2">
              <MdVerifiedUser className="text-sky-500" />
              <h1>01588558555</h1>
            </div>
            <Link><FaMinusCircle className="text-orange-500" /></Link>
          </div>
          <div className="divider w-3/4"></div>
          <div className="flex items-center gap-3 mb-3">
            <FaPlusCircle className="text-green-500" />
            <Link><h1 className="text-sky-500">Add another Phone number</h1></Link>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" />
            <label htmlFor="">Hide Phone Numbers</label>
          </div>
        </div>
        <div className="flex gap-3">
          <input type="checkbox" name="terms" id="terms"/>
          <label htmlFor="">
            I have read and accept the{" "}
            <Link to='/terms' className="text-sky-500">Terms and Conditions</Link>
          </label>
        </div>
        <button className="px-5 py-1 rounded bg-[#3f93a8] text-white mx-auto block">
          Post Add
        </button>
      </div>
      </form>
      <div className="divider"></div>
    </div>
  );
};

export default PostAdd;
