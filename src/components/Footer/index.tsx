import { footerData } from "../../constants/data";
import logo2 from "../../assets/logo2.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#123557] md:py-11 py-6">
      <div className="container border-y-2 text-white border-white/20 h-full w-full md:py-8 py-3 flex md:flex-row flex-col justify-between items-center">
        {/* For Logo */}
        <div className="flex md:items-end md:flex-row md:gap-10 flex-col">
          <div className="md:mb-0 mb-7">
            <div className="relative w-[206px] h-[40.15px] flex items-center">
              <div className="w-[9.44px] h-[40.15px] bg-primary" />
              <div className="w-[9.44px] h-[40.15px] bg-[#456381]" />
              <div className="w-[9.44px] h-[40.15px] bg-[#8FB7E1]" />
              <div className="w-[168.05px] h-[30.9px]">
                <img src={logo2} className="w-full h-full" />
              </div>
            </div>
            <p className="font-[300] leading-8 md:mt-2 mt-2 md:ml-2 ml-3">
              &copy; R Singhania
            </p>
          </div>
          {/* For Footer Data */}
          <ul className="flex gap-16 items-start">
            {footerData.map((items) => (
              <div key={items.id}>
                <h1 className="font-[700] text-[15.13px] mb-4">
                  {items.value}
                </h1>
                {items.children.map((item) => (
                  <li key={item.id} className="">
                    <a
                      href={item.url}
                      className="text-[14px] hover:font-[400] leading-7 font-[300] hover-border"
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
        {/* For Social Links */}
        <div className="flex items-end justify-between md:mt-0 mt-10">
          <div className="flex gap-7 items-center">
            <div className="rounded-full border w-10 h-10 flex items-center justify-center cursor-pointer hover:border-2 border-white/20 hover:border-white/50">
              <FaLinkedinIn size={18}/>
            </div>
            <div className="rounded-full border w-10 h-10 flex items-center justify-center cursor-pointer hover:border-2 border-white/20 hover:border-white/50">
              <FaTwitter size={18}/>
            </div>
            <div className="rounded-full border w-10 h-10 flex items-center justify-center cursor-pointer hover:border-2 border-white/20 hover:border-white/50">
              <LiaFacebookF size={18}/>
            </div>
            <div className="rounded-full border w-10 h-10 flex items-center justify-center cursor-pointer hover:border-2 border-white/20 hover:border-white/50">
              <FaInstagram size={18}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
