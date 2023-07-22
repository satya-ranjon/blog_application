import { images } from "../../constants";
import { formatDate } from "../../utils/dateformat";
import { BiEditAlt, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import CommentSent from "./CommentSent";
import { useCommentsData } from "../../hooks/useCommentsData";

const SingleComment = ({
  comment,
  logginedUserId = "a",
  addCommentHandler,
  affectedComment,
  setAffectedComment,
}) => {
  if (!comment) {
    // Handle the scenario when comment is not provided
    return null;
  }

  const {
    _id,
    user: { name, _id: userId, image },
    desc,
    createdAt,
  } = comment || {};

  const userImage = image || images.author;

  const isUserLogin = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === userId;

  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === _id;

  return (
    <div className=" bg-[#f2f4f5] text-xs p-2 my-2">
      <div className="flex gap-2 justify-start py-2 ">
        <div className="w-12">
          <div className="w-[36px] h-[36px] rounded-full overflow-hidden">
            <img src={userImage} alt="author" className="w-[36px] h-[36px]" />
          </div>
        </div>
        <div className="text-dark-light font-normal">
          <h1 className=" font-bold text-dark-soft">{name}</h1>
          <span className="block  ">{formatDate(createdAt)}</span>
          <p className="py-2">{desc}</p>
          <ul className=" flex gap-4 items-center justify-start">
            <li
              className=" flex gap-2 items-center justify-center cursor-pointer"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: _id })
              }>
              <BiComment /> <span>Reply</span>
            </li>
            {commentBelongsToUser && (
              <>
                <li className=" flex gap-2 items-center justify-center cursor-pointer">
                  <BiEditAlt /> <span>Edit</span>
                </li>
                <li className=" flex gap-2 items-center justify-center cursor-pointer">
                  <AiOutlineDelete /> <span>Delete</span>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {isReplying && (
        <CommentSent
          reply={true}
          parent={_id}
          replyOnUser={logginedUserId}
          submitCommentHandler={addCommentHandler}
        />
      )}
    </div>
  );
};

export default SingleComment;
