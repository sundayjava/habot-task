import arrow from "../../assets/icons/arrowforward.svg";

export default function ReadyToDive() {
  const gridData = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  return (
    <div className="pt-28">
      <div className="container flex lg:flex-row flex-col justify-between w-full">
        <div className="lg:w-[50%] w-full">
          <p data-aos="zoom-in" className="font-[700] text-[37.34px] leading-10">
            Ready to dive into <span className="text-[#271555]">HABOT?</span>
          </p>
          <p data-aos="zoom-in" className="font-[300] text-[17.16px] leading-7 text-black lg:py-10 py-6">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <div data-aos="zoom-in" className="bg-secondary lg:mb-0 mb-10 cursor-pointer text-white w-[317px] h-[54px] rounded-[5px] border font-[700] leading-6 text-[18px] flex justify-center gap-7 items-center hover:bg-secondary/70">
            Sign up Today!
            <div className="w-[32px] h-[16.08px]">
              <img src={arrow} className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 md:gap-5 gap-3">
            {gridData.map((item) => (
              <div data-aos="zoom-in" className="md:w-[260px] h-[65px] rounded-[5px] border border-[#E7760D] flex justify-center items-center cursor-pointer hover:border-accent/50">
                <p className="font-[500] leading-8 text-[18.75px]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
