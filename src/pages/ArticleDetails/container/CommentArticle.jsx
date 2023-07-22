import React from "react";
import CommentList from "../../../components/comment/CommentList";
import CommentSent from "../../../components/comment/CommentSent";
import { useCommentsData } from "../../../hooks/useCommentsData";

const CommentArticle = () => {
  // Custom hook for data fetching
  const { loading, error, commentsData, mainComment, addCommentHandler } =
    useCommentsData();

  return (
    <div className="w-full my-5">
      <CommentSent submitCommentHandler={addCommentHandler} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <CommentList
          comments={commentsData}
          addCommentHandler={addCommentHandler}
        />
      )}
    </div>
  );
};

export default CommentArticle;
