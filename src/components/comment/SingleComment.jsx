import { images } from "../../constants";
import { formatDate } from "../../utils/dateformat";
import { BiEditAlt, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const SingleComment = ({ single = false, reply = false }) => {
  return (
    <div className={`bg-[#f2f4f5] text-xs p-2 my-2 ${single && "ml-10"}`}>
      <div className="flex gap-2 justify-start py-2 ">
        <div className="w-12">
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
            <img
              src={images.author}
              alt="author"
              className="w-[36px] h-[36px]"
            />
          </div>
        </div>
        <div className="text-dark-light font-normal">
          <h1 className=" font-bold text-dark-soft">Khokon Deb</h1>
          <span className="block  ">
            {formatDate("2023-07-23T12:34:56.789Z")}
          </span>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className=" flex gap-4 items-center justify-start">
            <li className=" flex gap-2 items-center justify-center cursor-pointer">
              <BiComment /> <span>Reply</span>
            </li>
            <li className=" flex gap-2 items-center justify-center cursor-pointer">
              <BiEditAlt /> <span>Edit</span>
            </li>
            <li className=" flex gap-2 items-center justify-center cursor-pointer">
              <AiOutlineDelete /> <span>Delete</span>
            </li>
          </ul>
        </div>
      </div>
      {reply && <SingleComment single={true} />}
    </div>
  );
};

export default SingleComment;
