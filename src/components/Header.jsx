import { useState } from "react";
import { images } from "../constants";
import navItemInfo from "../data/navItemInfo";
import NavItem from "./NavItem";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => setNavIsVisible((prv) => !prv);

  return (
    <header className="container px-2 md:px-0 mx-auto  flex justify-between py-5 items-center font-opensans ">
      <div>
        <img src={images.logo} alt="logo" />
      </div>
      <div className=" md:hidden text-2xl z-50 cursor-pointer">
        {navIsVisible ? (
          <AiOutlineClose onClick={navVisibilityHandler} />
        ) : (
          <AiOutlineMenu onClick={navVisibilityHandler} />
        )}
      </div>
      <nav
        className={`${
          navIsVisible ? " right-0" : "-right-full"
        }  transition-all duration-300 mt-[66px] md:mt-0 md:bg-transparent bg-dark-soft flex flex-col w-full md:w-auto justify-center lg:justify-between md:flex-row fixed top-0 bottom-0 md:static gap-y-5 md:gap-y-0 gap-x-8 items-center`}>
        <ul className="flex text-white flex-col md:flex-row gap-5 items-center font-semibold md:text-dark-soft">
          {navItemInfo.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
        <button className="border-2 md:border-primary rounded-full text-center text-sm text-white md:text-primary py-1 px-5 font-bold md:hover:bg-primary md:hover:text-white transition-colors duration-300 ">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Header;
