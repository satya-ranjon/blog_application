import { images } from "../../constants";
import { formatDate } from "../../utils/dateformat";
import { BiEditAlt, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import useUser from "../../hooks/useUser";
import CommentSent from "./CommentSent";

const SingleComment = ({
  comment,
  replyCommentList = [],
  replyOnUser = null,
  single = false,
  submitCommentHandler,
  affectedComment,
  setAffectedComment,
  parentID = null,
  handleRemoveComment,
  handleUpdateComment,
}) => {
  const { userID } = useUser();

  if (!comment) {
    // Handle the scenario when comment is not provided
    return null;
  }

  const {
    _id: commentID,
    user: { name: commentUserName, _id: commentUserID },
    desc,
    createdAt,
  } = comment || [];

  const isUserComment = userID === commentUserID;

  let isReply =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === commentID;

  let isEdit =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === commentID;

  const replyCommentSendHandler = () => {
    setAffectedComment({ type: "replying", _id: commentID });
  };
  const editingCommentSendHandler = () => {
    setAffectedComment({ type: "editing", _id: commentID });
  };

  const cancelCommentSendHandler = () => {
    setAffectedComment(null);
  };

  const removeCommentHandler = () => {
    handleRemoveComment(commentID);
  };

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
            {!isUserComment && (
              <li
                className="flex gap-2 items-center justify-center cursor-pointer"
                onClick={replyCommentSendHandler}>
                <BiComment /> <span>Reply</span>
              </li>
            )}
            {isUserComment && (
              <>
                <li
                  className="flex gap-2 items-center justify-center cursor-pointer"
                  onClick={editingCommentSendHandler}>
                  <BiEditAlt /> <span>Edit</span>
                </li>
                <li
                  className="flex gap-2 items-center justify-center cursor-pointer"
                  onClick={removeCommentHandler}>
                  <AiOutlineDelete /> <span>Delete</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {(isReply || isEdit) && (
        <CommentSent
          submitCommentHandler={submitCommentHandler}
          parent={parentID || commentID}
          replyOnUser={{ _id: commentUserID, name: commentUserName }}
          label="Reply"
          reply={true}
          cancelCommentSendHandler={cancelCommentSendHandler}
          initialData={isEdit ? desc : null}
          isEdit={isEdit}
          handleUpdateComment={handleUpdateComment}
          commentId={commentID}
        />
      )}
      {replyCommentList?.length > 0 &&
        replyCommentList.map((commentReply) => {
          return (
            <SingleComment
              single={true}
              comment={commentReply}
              key={commentReply._id}
              replyOnUser={commentReply.replyOnUser}
              submitCommentHandler={submitCommentHandler}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              parentID={commentReply.parent}
              handleRemoveComment={handleRemoveComment}
              handleUpdateComment={handleUpdateComment}
            />
          );
        })}
    </div>
  );
};

export default SingleComment;
