import { useEffect, useRef, useState } from "react";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import { MdCancelScheduleSend, MdSend } from "react-icons/md";

const CommentSent = ({
  submitCommentHandler,
  reply = false,
  parent = null,
  replyOnUser = null,
  label = "Send",
  cancelCommentSendHandler,
  initialData = null,
  isEdit = false,
  handleUpdateComment,
  commentId,
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
    if (!isEdit) {
      submitCommentHandler({
        commentTxt: comment,
        parent,
        replyOnUser,
        userID,
        userName: name,
        postId,
      });
    } else {
      handleUpdateComment({
        commentTxt: comment,
        commentId,
      });
    }

    // Clear comment field after submission
    setComment(" ");
  };

  useEffect(() => {
    // Focus on the textarea after mounting and after submission
    reply && commentRef.current.focus();

    if (initialData) {
      setComment(initialData);
    }
  }, [initialData, reply]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-[1px] items-end h-[160px] bg-white rounded-md border-sky-400 p-2 relative">
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
        className="w-[84px] h-[30px] sm:w-[104px] bg-blue-500  px-4 text-sm text-white font-semibold rounded-md flex gap-2 items-center justify-between sm:text-lg sm:p-5
          ">
        <span> {label}</span>
        <span>
          <MdSend />
        </span>
      </button>
      {reply && (
        <button
          className=" absolute top-5 right-5 text-2xl bg-red-100 text-red-400 p-2  rounded-lg hover:bg-red-200 hover:text-red-500
      duration-200
      ">
          <MdCancelScheduleSend onClick={cancelCommentSendHandler} />
        </button>
      )}
    </form>
  );
};

export default CommentSent;
