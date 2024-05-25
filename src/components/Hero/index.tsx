import { BsBriefcaseFill } from "react-icons/bs";
import { ImLocation } from "react-icons/im";

export default function HeroSection() {
  return (
    <div className="shadowed-bg h-[609px] w-full relative">
      <img
        src="https://s3-alpha-sig.figma.com/img/4df9/f396/c8b4ef806609efd227c6672c5dba3716?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YB0wTaluFGXQDGTRKt46yiPjiMdT~6szdoCQPxP-XYNIN0Ub7eKw60srQD6zCeBLh-crvhj3SptYztTaQOXfD~oT9Wt4LRVHJG09FjhsBrl0pkCY628utGxz6m5w~ZfCjLNBaeAvdvoJqfKYaiaHA775l~DthhFfbhQ3x7Ei9K7N8ria0BGMuIPwC9IIOcNx7Sc0UQc8xqCD7CryX6kLmooF2WB63vOJcFLUs8jA~fvGE3FaV8JkfTGH12~A8Dd5d2CaeU~~CxyA3VYI8RvgYORB-yQRIrqSjr3LwYKPOQYcIWpln-FP25tTo6pywJ9Xhy9vIjfQ9eiWdKn36ukLaQ__"
        alt="bgimge"
        className="w-full h-full object-top object-cover"
      />
      <div className="bg-primary/70 w-full h-full absolute top-0" />
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
