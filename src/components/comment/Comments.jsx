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
          .map((comment) => <SingleComment key={comment._id} />)
      )}
    </div>
  );
};

export default Comments;
