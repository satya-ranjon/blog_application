import { images } from "../constants";

const ArticleCard = ({}) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] my-5 font-opensans">
      <div className="">
        <img src={images.article} alt="" className="w-full" />
      </div>
      <div className="p-4">
        <h1 className=" font-roboto text-xl font-bold text-dark-soft">
          Future of Work
        </h1>
        <p className=" text-dark-light  font-normal text-sm py-4">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className=" flex gap-2 justify-between items-center">
          <div className="flex gap-3 justify-start items-center">
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <img src={images.author} alt="" className=" w-full h-full" />
            </div>
            <div>
              <i className="font-bold text-md">Johanna Murray</i>
              <div className="flex gap-1 ">
                <img src={images.verified} alt="verified" className="w-4 h-4" />
                <i className=" text-xs text-dark-light">Verified writer</i>
              </div>
            </div>
          </div>
          <i className="font-bold font-xl">02 May</i>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
