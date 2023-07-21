import { images } from "../constants";
import Categories from "./Categories";

const Footer = () => {
  return (
    <footer className=" px-4 sm:px-20 lg:px-5 xl:px-0 sm:py-10 lg:py-20 bg-dark-hard">
      <div className="container mx-auto  font-opensans ">
        <div className="grid grid-cols-10 sm:grid-cols-12 ">
          <Categories />
          <div className="w-full flex flex-col justify-center items-center py-10 sm:items-start sm:justify-start col-span-10 sm:order-first sm:col-span-4 lg:col-span-4">
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

          {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 justify-between w-full ">
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
