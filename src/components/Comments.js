import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const Comments = () => {
  const state = useSelector((state) => state);

  const comments = state.comments.filter((ele) => ele.parent_id === null);
  return (
    <div>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={Math.random(Math.floor(Math.random * 7 + 10))}
            comment={comment}
          />
        ))}
    </div>
  );
};

export default Comments;
