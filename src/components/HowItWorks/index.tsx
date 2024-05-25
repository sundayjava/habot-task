import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../../assets/icons";

export default function HowItWorks() {
  const gridData = [
    {
      id: 1,
      content: "Select Your Role and Sign Up",
      icon: icon1,
    },
    {
      id: 2,
      content: "Buyers Post Your Requirements",
      icon: icon2,
    },
    {
      id: 3,
      content: " Review, Select, and Contact the Best Suppliers",
      icon: icon3,
    },
    {
      id: 4,
      content:
        " Suppliers Complete your profile and get notified for opportunities",
      icon: icon4,
    },
    {
      id: 5,
      content: "Contact to Buyers and Share your Quote for the service",
      icon: icon5,
    },
    {
      id: 6,
      content:
        "Both the Parties can Connect and Make Business Leave a Feedback",
      icon: icon6,
    },
  ];

  return (
    <div className="lg:mt-40 mb-40 mt-20 ">
      <div className="container">
        <h1 className="w-full font-[700] text-[37.34px] leading-10 text-center" data-aos="zoom-in">How it works?</h1>
       <div className="flex justify-center mt-8 mb-16">
       <p data-aos="zoom-in" className="md:w-[839px] font-[400] md:text-[17.16px] text-[14px] leading-7 text-center">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
       </div>
        <div>
          <ul className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {gridData.map((items) => (
              <li data-aos="zoom-in" className="h-[254px] odd-bg-color flex flex-col gap-5 justify-center items-center">
                <div className="relative md:w-[75px] w-[65px] md:h-[75px] h-[65px] cursor-pointer">
                  <img
                    loading="lazy"
                    src={items.icon}
                    className="object-contain object-top"
                  />
                </div>
                <p className="font-[500] text-center leading-7">{items.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
