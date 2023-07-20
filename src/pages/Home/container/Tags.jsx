import tags from "../../../data/tags";

const Tags = () => {
  return (
    <div className=" flex flex-col sm:flex-row  items-start sm:items-center gap-3 my-3 sm:mt-8">
      <i className=" text-dark-light font-bold text-sm ">Popular Tags :</i>
      <ul className="flex  gap-2 flex-wrap">
        {tags.map((tag) => (
          <li
            key={tag}
            className=" bg-sky-100 p-2 font-bold text-sm text-sky-600">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
