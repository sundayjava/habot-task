import { useState } from "react";
import { MdDone } from "react-icons/md";

export default function BuyersVideoSection() {
  const [active, setActive] = useState(1);

  const buyerContent = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ];

  //Making some changes to the buyercontent Data to effect the animation
  const supplierContent = [
    "Sit back for multiple suppliers to contact you.",
    "Post your requirements.",
    "Choose among the suppliers based on the ratings and reviews.",
  ];

  return (
    <div className="pt-32 container">
      <div className="bg-primary lg:px-20 md:px-8 px-1 flex justify-between lg:flex-row flex-col items-start lg:py-28 py-16">
        <div
          data-aos="zoom-in"
          className="md:w-[600px] w-full lg:mb-0 mb-10 h-[320px] rounded-[5px]"
        >
          {/*Addin youtube video the represent the hardcoded image and the youTube icon in the design*/}
         <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ"
            title="HABOT"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/*Setting some state to switch between the Buyer button and the Supplier button*/}
        <div className="lg:w-[40%] md:w-[75%] w-full md:mt-8">
          <div className="flex justify-between">
            <button
              data-aos="zoom-in"
              onClick={() => setActive(1)}
              className={`w-[202px] h-[47px] hover:text-accent/70 ${
                active === 1
                  ? "border-b-accent border-b-4 font-[700] text-[26px] leading-8 text-accent"
                  : "font-[700] text-[26px] leading-8 text-white"
              }`}
            >
              Buyer
            </button>
            <button
              data-aos="zoom-in"
              onClick={() => setActive(2)}
              className={`w-[202px] h-[47px] hover:text-accent/70 ${
                active === 2
                  ? "border-b-accent border-b-4 font-[700] text-[26px] leading-8 text-accent"
                  : "font-[700] text-[26px] leading-8 text-white"
              }`}
            >
              Supplier
            </button>
          </div>

          {/*Redering the data based on the active button*/}
          {active === 1 ? (
            <ul className="mt-7">
              {buyerContent.map((items, i) => (
                <li data-aos="zoom-in" key={i} className="flex gap-2">
                  <div className="w-[18px] h-[18px] bg-secondary rounded-full mt-2 flex justify-center items-center">
                    <MdDone color="white" width={11.95} height={9.17} />
                  </div>
                  <p className="text-white font-[500] text-[18px] leading-9">
                    {items}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-7">
              {supplierContent.map((items, i) => (
                <li key={i} className="flex gap-2">
                  <div className="w-[18px] h-[18px] bg-secondary rounded-full mt-2 flex justify-center items-center">
                    <MdDone color="white" width={11.95} height={9.17} />
                  </div>
                  <p className="text-white font-[500] text-[18px] leading-9">
                    {items}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
