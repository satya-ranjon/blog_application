import { images } from "../constants";

const Footer = () => {
  return (
    <footer className=" px-4 sm:px-20 lg:px-5 xl:px-0 bg-dark-hard">
      <div className="container mx-auto">
        <div className=" font-opensans flex flex-col-reverse sm:flex-row">
          <div className="w-full flex flex-col justify-center items-center py-5 sm:py-0 sm:items-start sm:justify-start">
            <img src={images.wlogo} alt="logo" className="w-[90px] h-[28px]" />
            <p className="font-opensans text-[#5A7184]  py-2">
              Build a modern and creative website with crealand
            </p>
            <ul className=" flex gap-2">
              <li>
                <img src={images.layer} alt="" className="w-[40px] h-[40px]" />
              </li>
              <li>
                <img src={images.layer} alt="" className="w-[40px] h-[40px]" />
              </li>
              <li>
                <img src={images.layer} alt="" className="w-[40px] h-[40px]" />
              </li>
              <li>
                <img src={images.layer} alt="" className="w-[40px] h-[40px]" />
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-5 justify-between w-full ">
            <ul>
              <span className="pb-4  block text-[#5A7184] font-bold text-base">
                Product
              </span>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
            </ul>
            <ul>
              <span className="pb-4  block text-[#5A7184] font-bold text-base">
                Product
              </span>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
            </ul>
            <ul>
              <span className="pb-4  block text-[#5A7184] font-bold text-base">
                Product
              </span>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
            </ul>
            <ul>
              <span className="pb-4  block text-[#5A7184] font-bold text-base">
                Product
              </span>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
              <li className="py-2 text-[#959EAD] text-sm font-normal">
                Landingpage
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
