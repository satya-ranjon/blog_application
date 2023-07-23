import { useEffect, useState } from "react";
import CommentSent from "./CommentSent";
import SingleComment from "./SingleComment";
import getCommentsData from "../../data/comment";
import CommentsSkeleton from "../skeleton/CommentsSkeleton";

const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [iserror, setIsError] = useState(false);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setCommentData(await getCommentsData());
        setIsLoading(false);
      } catch (err) {
        setIsError("Error fetching comments. Please try again later.");
        setIsLoading(false);
      }
    })();
  }, []);

  const submitCommentHandler = ({
    commentTxt,
    parent,
    replyOnUser,
    userID,
    userName,
    postId,
  }) => {
    const newComment = {
      _id: Math.floor(Math.random() * 10000),
      user: {
        _id: userID,
        name: userName,
      },
      desc: commentTxt,
      post: postId,
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };

    setCommentData([...commentData, newComment]);
  };

  const handleRemoveComment = (idToRemove) => {
    const updatedComment = commentData.filter(
      (comment) => comment._id !== idToRemove
    );

    setCommentData(updatedComment);
  };

  const handleUpdateComment = ({ commentTxt, commentId }) => {
    const updatedState = commentData.map((item) =>
      item._id === commentId ? { ...item, desc: commentTxt } : item
    );
    setCommentData(updatedState);
  };

  return (
    <div className="mb-5">
      <h1 className=" font-bold text-base text-dark-soft font-roboto py-8 ">
        All Comments ({commentData?.length})
      </h1>
      <CommentSent submitCommentHandler={submitCommentHandler} />

      <CommentsSkeleton />
      {isLoading ? (
        <h1>Loading</h1>
      ) : iserror ? (
        <h1>{iserror}</h1>
      ) : (
        commentData?.length > 0 &&
        commentData
          ?.filter((item) => item.parent === null)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((comment) => {
            const replyCommentList = commentData
              .filter((replyItem) => replyItem.parent === comment._id)
              .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

            return (
              <SingleComment
                key={comment._id}
                comment={comment}
                replyCommentList={replyCommentList}
                submitCommentHandler={submitCommentHandler}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                handleRemoveComment={handleRemoveComment}
                handleUpdateComment={handleUpdateComment}
              />
            );
          })
      )}
    </div>
  );
};

export default Comments;
