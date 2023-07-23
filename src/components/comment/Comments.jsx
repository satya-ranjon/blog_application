import CommentSent from "./CommentSent";
import SingleComment from "./SingleComment";

const Comments = () => {
  const submitCommentHandler = ({ commentTxt }) => {
    console.log(commentTxt);
  };

  return (
    <div>
      <h1 className=" font-bold text-base text-dark-soft font-roboto py-8">
        All Comments (3)
      </h1>

      <CommentSent submitCommentHandler={submitCommentHandler} />
      <SingleComment />
      <SingleComment reply={true} />
      <SingleComment />
      <SingleComment />
    </div>
  );
};

export default Comments;
