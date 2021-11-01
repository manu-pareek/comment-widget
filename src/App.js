import logo from "./logo.svg";
import "./App.css";
import Comments from "./components/Comments";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "./redux/actions";

function App() {
  const [comment, setComment] = useState("Enter Something to Comment ....");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch({
      type: "SET_INITIAL_STATE",
      payload: localStorage.getItem("state")
        ? JSON.parse(localStorage.getItem("state"))
        : state,
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);
  return (
    <div className="App">
      <body>
        <div id="_comment-img">
          <img src="https://usersinsights.com/wp/wp-content/uploads/2018/03/image6.png" />
        </div>
        <div id="comment_input">
          <textarea
            rows="8"
            cols="60"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            onClick={() => setComment("")}
            maxLength="200"
          ></textarea>
          <button
            onClick={() =>
              dispatch(addComment({ comment: comment, parent_id: null }))
            }
          >
            Comment
          </button>
        </div>
      </body>
      <footer>
        <h4>
          Sort by :
          <select
            onChange={(e) =>
              dispatch({ type: "SORT_BY", payload: e.target.value })
            }
          >
            <option value="date">Date</option>
            <option value="likes">Likes</option>
          </select>
        </h4>
        <Comments />
      </footer>
    </div>
  );
}

export default App;
