import { Link } from "react-router-dom";

const BreadCrumbs = ({ data }) => {
  console.log("BreadCrumbs");
  return (
    <ul className="flex text-dark-light font-normal text-xs sm:text-sm py-3">
      {data?.map((item, index) => (
        <li key={index}>
          <Link to={item.link}>{item.name}</Link>
          {index !== data?.length - 1 && <span className="px-2">/</span>}
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
