import React from "react";
import catagories from "../data/catagories";

const Categories = () =>
  Object.keys(catagories).map((category) => (
    <React.Fragment key={category}>
      <ul>
        <span className="pb-4  block text-[#5A7184] font-bold text-base">
          {category}
        </span>
        {catagories[category].map((item) => (
          <React.Fragment key={item}>
            <li className="py-2 text-[#959EAD] text-sm font-normal">{item}</li>
          </React.Fragment>
        ))}
      </ul>
    </React.Fragment>
  ));
export default Categories;
