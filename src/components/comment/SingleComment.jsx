import { images } from "../../constants";
import { formatDate } from "../../utils/dateformat";
import { BiEditAlt, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

const SingleComment = ({
  comment,
  replyCommentList = [],
  replyOnUser = null,
  single = false,
}) => {
  if (!comment) {
    // Handle the scenario when comment is not provided
    return null;
  }
  console.log(replyCommentList?.length > 0);
  const {
    user: { name: commentUserName },
    desc,
    createdAt,
  } = comment || [];

  // const isReply = affectedComment && affectedComment.type === 'replying' && affectedComment._id ===
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
          <h1 className=" font-bold text-dark-soft">
            {commentUserName}
            {replyOnUser && (
              <span className=" pl-2">
                with
                <span className=" pl-2 font-opensans text-sm font-semibold text-sky-500">
                  {replyOnUser.name}
                </span>
              </span>
            )}
          </h1>
          <span className="block  ">{formatDate(createdAt)}</span>
          <p className="py-2">{desc}</p>
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
      {replyCommentList?.length > 0 &&
        replyCommentList.map((commentReply) => {
          return (
            <SingleComment
              single={true}
              comment={commentReply}
              key={commentReply._id}
              replyOnUser={commentReply.replyOnUser}
            />
          );
        })}
    </div>
  );
};

export default SingleComment;
