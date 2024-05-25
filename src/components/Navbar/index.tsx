import { useState } from "react";
import logo from '../../assets/logo.png'

export default function Navbar() {
  //Starting with a start to handle the custom hamburger icon created with p tag
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full">
      <div className="container h-[86px] flex justify-between items-center">
        {/*Project logo*/}
        <div className="relative w-[181px] cursor-pointer">
          <img
            loading="lazy"
            src={logo}
            className="object-contain object-top"
          />
        </div>
        {/* Other navigation content and responsive content to hide the button and paragraph for screen breakpoint */}
        <div className="md:flex items-center gap-7 font-[400] leading-6 hidden">
          <span className="cursor-pointer text-[15.25px] hover-border hover:text-primary">
            Find Suppliers
          </span>
          <select className="border-none outline-none cursor-pointer bg-white">
            <option>Find Service Tags</option>
          </select>
          <div className="flex items-center gap-2 text-[15px] text-secondary border-secondary px-7 py-2 border rounded-[5px] font-[700]">
            <span className="cursor-pointer hover:font-[400]">Login</span> /{" "}
            <span className="cursor-pointer hover:font-[500]">Sign Up</span>
          </div>
        </div>

        {/*For mobile device only*/}
        <div className="md:hidden flex flex-1 justify-end items-start">
           {/*Custom hamburger icon*/}
          <div
            onClick={() => setToggle((prev) => !prev)}
            className={`harmburger-open ${
              toggle && "harmburger-close"
            } w-[28px] h-[28px] cursor-pointer z-10 text-black`}
          >
            <p></p>
            <p></p>
            <p></p>
          </div>

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 absolute top-14 border-t my-2 left-0 rounded-bl-lg rounded-br-lg bg-white w-full z-10 dark:text-[#1a202c]`}
          >
            <div className="container font-[400] hover:text-secondary leading-6 flex flex-col items-center gap-5 justify-start">
              <span className="cursor-pointer text-[15.25px]">
                Find Suppliers
              </span>
              <select className="border-none outline-none cursor-pointer bg-white">
                <option>Find Service Tags</option>
              </select>
              <div className="flex items-center justify-center gap-2 text-[15px] text-secondary border-secondary py-2 border rounded-[5px] font-[700] md:w-[40%] w-full">
                <span className="cursor-pointer hover:font-[400]">Login</span> /{" "}
                <span className="cursor-pointer hover:font-[500]">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
