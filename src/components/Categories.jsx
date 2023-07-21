import React from "react";
import catagories from "../data/catagories";

const Categories = () =>
  Object.keys(catagories).map((category, i) => (
    <ul
      key={category}
      className={`col-span-5 pt-12 sm:pt-8 sm:col-span-4 lg:col-span-2 ${
        i === 2 && " sm:col-start-5 "
      }`}>
      <span className="pb-4  block text-[#5A7184] font-bold text-base">
        {category}
      </span>
      {catagories[category].map((item) => (
        <React.Fragment key={item}>
          <li className="py-2 text-[#959EAD] text-sm font-normal">{item}</li>
        </React.Fragment>
      ))}
    </ul>
  ));
export default Categories;
