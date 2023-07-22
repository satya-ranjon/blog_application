import { images } from "../../constants";
import { formatDate } from "../../utils/dateformat";
import { BiEditAlt, BiComment } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import SingleComment from "./SingleComment";
import { useState } from "react";

const CommentList = ({ comments, addCommentHandler }) => {
  console.log("CommentList");
  const [affectedComment, setAffectedComment] = useState(null);
  return (
    <div>
      <h1 className=" font-bold text-base text-dark-soft font-roboto py-8">
        All Comments (3)
      </h1>
      {comments
        ?.filter((item) => item.parent === null)
        .map((comment) => (
          <SingleComment
            key={comment._id}
            comment={comment}
            addCommentHandler={addCommentHandler}
            setAffectedComment={setAffectedComment}
            affectedComment={affectedComment}
          />
        ))}
    </div>
  );
};

export default CommentList;
