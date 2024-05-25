import { BsBriefcaseFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import bg from "../../assets/bg.png"

//How i was able to acheive the hero section with the floating text. check line by line

export default function HeroSection() {
  return (
    //Starting the component with div dive because it depends on another component, and also set position to relative so that i can render the floating content
    <div className="shadowed-bg h-[609px] w-full relative">
       {/*The image that act as the background for this section*/}
      <img
        src={bg}
        alt="bgimge"
        className="w-full h-full object-top object-cover"
      />
       {/*Div with width and height 100% and color to show the hover effect*/}
      <div className="bg-primary/70 w-full h-full absolute top-0" />
       {/*This is where the floating text and button start*/}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="font-[700] md:text-[55px] text-[30px] leading-9 md:leading-[66px] text-center" data-aos="zoom-in">
          Are You a Supplier?
        </h1>
        <h2 className="font-[400] md:text-[55px] text-[26px] leading-9 md:leading-[66px] text-center" data-aos="zoom-in">
          Explore Matching Opportunities.
        </h2>
        <div className="flex md:flex-row flex-col items-center justify-center gap-3 w-[95%] my-8">
          <div className="flex gap-3 items-center rounded-[5px] bg-white h-[56px] lg:w-[400px] md:w-[350px] w-full px-5 " data-aos="fade">
            <BsBriefcaseFill className="text-accent w-[21px] h-[21px]" />
            <input
              type="search"
              placeholder="Search your required service here"
              className="w-full font-[300] text-[15px] leading-7 outline-none border-none bg-transparent text-black"
            />
          </div>
          <div className="flex gap-3 items-center rounded-[5px] bg-white h-[56px] lg:w-[400px] md:w-[350px] w-full px-5 " data-aos="fade">
            <ImLocation className="text-accent w-[22px] h-[22px]" />
            <input
              type="search"
              placeholder="Search your desired location here"
              className="w-full font-[300] text-[15px] leading-7 outline-none border-none bg-transparent text-black"
            />
          </div>
          <button data-aos="fade" className="md:w-[117.94px] h-[54px] w-full rounded-[5px] bg-secondary text-white hover:bg-secondary/70 text-[15.13px] leading-6 font-[700]">
            Search
          </button>
        </div>
        <p className="font-[700] text-[18px] leading-7 text-center" data-aos="zoom-in">
          Are you a buyer?{" "}
          <span className="font-[400] underline cursor-pointer hover:font-[500]">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>
    </div>
  );
}
