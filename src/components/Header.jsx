import { useState } from "react";
import { images } from "../constants";
import navItemInfo from "../data/navItemInfo";
import NavItem from "./NavItem";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => setNavIsVisible((prv) => !prv);

  return (
    <header className="container px-2 sm:px-20 lg:px-5 xl:px-0  mx-auto   flex justify-between py-5 items-center font-opensans ">
      <div>
        <img src={images.logo} alt="logo" className=" w-[90px] h-[28px]" />
      </div>
      <div className=" lg:hidden text-2xl z-50 cursor-pointer">
        {navIsVisible ? (
          <AiOutlineClose onClick={navVisibilityHandler} />
        ) : (
          <AiOutlineMenu onClick={navVisibilityHandler} />
        )}
      </div>
      <nav
        className={`${
          navIsVisible ? " right-0" : "-right-full"
        }  transition-all duration-300 mt-[66px] lg:mt-0 lg:bg-transparent bg-dark-soft flex flex-col w-full lg:w-auto justify-center lg:justify-between lg:flex-row fixed top-0 bottom-0 lg:static gap-y-5 lg:gap-y-0 gap-x-8 items-center`}>
        <ul className="flex text-white flex-col lg:flex-row gap-5 items-center font-semibold lg:text-dark-soft">
          {navItemInfo.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </ul>
        <Link to="/sign-up">
          <button className="border-2 lg:border-primary rounded-full text-center text-sm text-white lg:text-primary py-1 px-5 font-bold lg:hover:bg-primary lg:hover:text-white transition-colors duration-300 ">
            Sign in
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
