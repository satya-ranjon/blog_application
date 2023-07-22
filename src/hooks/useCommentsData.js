import { useEffect, useState } from "react";
import getCommentsData from "../data/comment";

export const useCommentsData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setCommentsData] = useState([]);

  const commentsData = comments?.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  useEffect(() => {
    (async () => {
      try {
        const commentData = await getCommentsData();
        setCommentsData(commentData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching comment");
        setLoading(false);
      }
    })();
  }, []);

  const addCommentHandler = ({
    comment,
    parent = null,
    replyOnUser = null,
  }) => {
    const newComment = {
      _id: Date.now().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: comment,
      post: "1",
      parent,
      replyOnUser,
      createdAt: new Date().toISOString(),
    };
    console.log(newComment);
    // Update the comments list with the new comment
    setCommentsData((prevComments) => [...prevComments, newComment]);
  };

  return { loading, error, commentsData, addCommentHandler };
};
