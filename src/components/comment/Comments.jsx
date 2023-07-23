import { useEffect, useState } from "react";
import CommentSent from "./CommentSent";
import SingleComment from "./SingleComment";
import getCommentsData from "../../data/comment";

const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setCommentData(await getCommentsData());
        setIsLoading(false);
      } catch (err) {
        setIsError(true);
        setIsLoading(false);
      }
    })();
  }, []);

  const submitCommentHandler = ({ commentTxt }) => {
    console.log(commentTxt);
  };

  return (
    <div>
      <h1 className=" font-bold text-base text-dark-soft font-roboto py-8">
        All Comments (3)
      </h1>
      <CommentSent submitCommentHandler={submitCommentHandler} />

      {isLoading ? (
        <h1>Loading</h1>
      ) : iserror ? (
        <h1>Some Error</h1>
      ) : (
        commentData?.length > 0 &&
        commentData
          ?.filter((item) => item.parent === null)
          .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
          .map((comment) => {
            const replyCommentList = commentData
              .filter((replyItem) => replyItem.parent === comment._id)
              .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

            return (
              <SingleComment
                key={comment._id}
                comment={comment}
                replyCommentList={replyCommentList}
              />
            );
          })
      )}
    </div>
  );
};

export default Comments;
