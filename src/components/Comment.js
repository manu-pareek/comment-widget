import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  addDislike,
  addLike,
  addReply,
  deleteComment,
  editComment,
  removeDislike,
  removeLike,
} from "../redux/actions";
import "./comment.css";
const Comment = ({ comment }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showAddReply, setShowAddReply] = useState(false);
  const [reply, setReply] = useState("");
  const [like, setLike] = useState(comment.likes);
  const [dislike, setDislike] = useState(comment.dislikes);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(comment.comment);
  const [date, setDate] = useState(msToTime(Date.now() - comment.date));
  const replies = state.comments.filter((ele) => ele.parent_id === comment.id);

  function msToTime(ms) {
    let seconds = (ms / 1000).toFixed(1);
    let minutes = (ms / (1000 * 60)).toFixed(1);
    let hours = (ms / (1000 * 60 * 60)).toFixed(1);
    let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60) return seconds + " Sec";
    else if (minutes < 60) return minutes + " Min";
    else if (hours < 24) return hours + " Hrs";
    else return days + " Days";
  }
  const addReplyFunc = () => {
    setShowAddReply(false);
    setReply("");
    setDate(msToTime(Date.now() - comment.date));

    dispatch(
      addComment({
        comment: reply,
        parent_id: comment.id,
      })
    );
  };

  return (
    <div style={{ marginBottom: "5%", margin: "0px", padding: "0px" }}>
      <div id="_comment">
        <div>
          <img src={comment.user.profile_picture} />
        </div>

        <div id="_right-side">
          <div id="_right-label">
            <h5 id="_user-name">{comment.user.name}</h5>
            <h5 id="_comment-date">* &nbsp; {date} ago</h5>
          </div>
          <div style={{ margin: "0px" }}>
            {edit ? (
              <>
                <textarea
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  rows="4"
                  cols="60"
                  maxLength="200"
                />
                <button
                  onClick={() =>
                    dispatch(
                      editComment({ id: comment.id, comment: editValue })
                    )
                  }
                  style={{ margin: "2%" }}
                >
                  Edit
                </button>
              </>
            ) : (
              <h4
                style={{
                  maxWidth: "80%",
                  overflowWrap: "break-word",
                  textAlign: "left",
                  marginLeft: "2%",
                }}
              >
                {comment.comment}
              </h4>
            )}
          </div>
          <div id="_comment-label">
            <h6
              onClick={() =>
                like
                  ? dispatch(removeLike(comment))
                  : !dislike && dispatch(addLike(comment))
              }
            >
              Likes : {comment.likes}
            </h6>
            <h6
              onClick={() =>
                dislike
                  ? dispatch(removeDislike(comment))
                  : !like && dispatch(addDislike(comment))
              }
            >
              Dislikes : {comment.dislikes}
            </h6>
            <h6 onClick={() => setShowAddReply(!showAddReply)}>Reply</h6>
            <h6 onClick={() => setEdit(!edit)}>Edit</h6>
            <h6 onClick={() => dispatch(deleteComment(comment))}>Delete</h6>
          </div>
        </div>
      </div>
      {showAddReply && (
        <div id="_add-reply">
          <div>
            <textarea
              rows="5"
              cols="30"
              onChange={(e) => setReply(e.target.value)}
            />
          </div>
          <div>
            <button onClick={addReplyFunc}>Reply</button>
          </div>
        </div>
      )}
      {/* recursively calling comment component with base condition  */}
      {replies &&
        replies.map((ele) => (
          <div style={{ marginLeft: "5%", marginTop: "2%" }}>
            <Comment comment={ele} />
          </div>
        ))}
    </div>
  );
};

export default Comment;
