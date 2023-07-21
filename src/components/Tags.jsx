import { Link } from "react-router-dom";

const Tags = ({ heading, row = true, tags = [] }) => {
  return (
    <div
      className={`flex flex-col ${
        row && "sm:flex-row sm:items-center"
      } items-start  gap-3 my-3 sm:mt-8`}>
      <i className=" text-dark-light font-bold text-sm ">{heading} :</i>
      <ul className="flex  gap-2 flex-wrap">
        {tags?.map((tag) => (
          <Link
            key={tag}
            to={`/blog?search=${tag.toLowerCase()}`}
            className=" bg-sky-100 p-2 font-bold text-sm text-sky-600">
            {tag}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
