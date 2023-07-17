import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => setDropdown((prv) => !prv);

  return (
    <li className=" group relative">
      {item.type === "link" ? (
        <>
          <a href="" className="py-2 px-4 ">
            {item.name}
          </a>
          <span className="absolute text-white md:text-primary font-bold transition-all duration-500 right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={toggleDropdown}
            className="py-2 px-4 flex items-center  ">
            <span> {item.name}</span>
            <RiArrowDropDownLine className="text-2xl" />
          </button>
          <div
            className={` ${
              dropdown ? "block" : "hidden"
            } md:hidden w-max md:bg-white text-center transition-all duration-500 pt-4 md:absolute md:bottom-0 md:right-0 md:transform md:translate-y-full md:group-hover:block`}>
            <ul className=" bg-dark-hard md:bg-transparent text-center flex flex-col items-center gap-2 shadow-lg rounded-lg overflow-hidden">
              {item?.items?.map((page) => (
                <li key={page}>
                  <a
                    href=""
                    className="md:hover:bg-dark-hard  hover:text-white px-4 py-2 text-white md:text-dark-soft block">
                    {page}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

export default NavItem;
