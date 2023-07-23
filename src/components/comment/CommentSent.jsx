import { useEffect, useRef, useState } from "react";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";

const CommentSent = ({
  submitCommentHandler,
  reply = false,
  parent = null,
  replyOnUser = null,
  label = "Send",
}) => {
  console.log("CommentSent");
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const { name, userID } = useUser();

  const { id: postId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment.trim() === "") {
      // Prevent submitting empty comments
      return;
    }

    submitCommentHandler({
      commentTxt: comment,
      parent,
      replyOnUser,
      userID,
      userName: name,
      postId,
    });

    // Clear comment field after submission
    setComment(" ");
  };

  useEffect(() => {
    // Focus on the textarea after mounting and after submission
    reply && commentRef.current.focus();
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-[1px] items-end h-[160px] bg-white rounded-md border-sky-400 p-2">
      <textarea
        type="text"
        placeholder="Leave your comment here..."
        className="w-full h-full placeholder:text-sm  outline-none resize-none"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        ref={commentRef}
      />
      <button
        // Disable button when comment is empty
        disabled={!comment.trim()}
        type="submit"
        className="w-[84px] h-[30px] sm:w-[104px] bg-blue-500  px-4 text-sm text-white font-semibold rounded-md 
          ">
        {label}
      </button>
    </form>
  );
};

export default CommentSent;
