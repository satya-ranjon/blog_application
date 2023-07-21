import { Link } from "react-router-dom";
import dateformat from "../../../utils/dateformat";
import Tags from "../../../components/Tags";
import { tags } from "../../../data/tags";

const SuggestedArticles = ({ articles }) => {
  return (
    <div className="shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-2 ">
      <h1 className=" font-bold text-base font-roboto text-dark-soft pb-3">
        Latest Article
      </h1>
      {articles?.map((item) => (
        <div className=" flex gap-2 py-1" key={item._id}>
          <Link
            to={`/article-details/${item._id}`}
            className="w-[57px] h-[59px] rounded-lg overflow-hidden bg-slate-500">
            <img src={item.image} alt="" className="w-full h-full" />
          </Link>
          <div className="">
            <Link
              to={`/article-details/${item._id}`}
              className=" font-bold text-sm text-dark-soft">
              {item.title}
            </Link>
            <span className=" text-xs text-dark-light block">
              {dateformat(item.createdAt)}
            </span>
          </div>
        </div>
      ))}
      <Tags row={false} heading="Tags" tags={tags} />
    </div>
  );
};

export default SuggestedArticles;
