const initialState = {
  dummy_users: [
    {
      name: "Superman",
      profile_picture:
        "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
    },
    {
      name: "Batman",
      profile_picture:
        "https://kids.kiddle.co/images/1/19/Batman_%28circa_2016%29.png",
    },
    {
      name: "Thanos",
      profile_picture:
        "https://i.pinimg.com/564x/df/8d/b7/df8db77bab37df6a571ea44859620748.jpg",
    },
    {
      name: "Iron man",
      profile_picture:
        "https://www.sideshow.com/storage/product-images/904599/iron-man-mark-lxxxv__silo.png",
    },
  ],
  comments: [],
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INITIAL_STATE": {
      console.log("state reducer ", action.payload);
      return { ...action.payload };
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        comments: [
          {
            id: state.count + 1,
            user: state.dummy_users[Math.floor(Math.random() * 4)],

            ...action.payload,
            likes: 0,
            dislikes: 0,
            date: Date.now(),
          },
          ...(state.comments || []),
        ],
        count: state.count + 1,
      };
    }
    case "SORT_BY": {
      console.log("sort by called");
      var comments = [];
      if (action.payload === "likes") {
        comments = state.comments;
        comments.sort((a, b) => {
          var keyA = a.likes,
            keyB = b.likes;
          // Compare the likes
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
        });
      } else if (action.payload === "date") {
        comments = state.comments;
        comments.sort(function (a, b) {
          var keyA = new Date(a.date),
            keyB = new Date(b.date);
          // Compare the 2 dates
          if (keyA < keyB) return 1;
          if (keyA > keyB) return -1;
          return 0;
        });
      }
      console.log(comments);
      return {
        ...state,
        comments,
      };
    }

    case "ADD_LIKE": {
      const comments = state.comments.map(func);
      function func(ele) {
        if (ele.id === action.payload.id) {
          let comment = ele;
          comment.likes++;
          return comment;
        } else return ele;
      }
      return {
        ...state,
        comments,
      };
    }
    case "ADD_DISLIKE": {
      const comments = state.comments.map(func);
      function func(ele) {
        if (ele.id === action.payload.id) {
          let comment = ele;
          comment.dislikes++;
          return comment;
        } else return ele;
      }
      return {
        ...state,
        comments,
      };
    }
    case "REMOVE_LIKE": {
      console.log("remove like called");
      const comments = state.comments.map(func);
      function func(ele) {
        if (ele.id === action.payload.id) {
          let comment = ele;
          comment.likes--;
          return comment;
        } else return ele;
      }
      return {
        ...state,
        comments,
      };
    }
    case "REMOVE_DISLIKE": {
      const comments = state.comments.map(func);
      function func(ele) {
        if (ele.id === action.payload.id) {
          let comment = ele;
          comment.dislikes--;
          return comment;
        } else return ele;
      }
      return {
        ...state,
        comments,
      };
    }
    case "EDIT_COMMENT": {
      const comments = state.comments.map(func);
      function func(ele) {
        if (ele.id === action.payload.id) {
          let comment = ele;
          comment.comment = action.payload.comment;
          return comment;
        } else return ele;
      }
      return {
        ...state,
        comments,
      };
    }
    case "DELETE_COMMENT": {
      let comments = state.comments.filter(
        (ele) =>
          ele.parent_id !== action.payload.id && ele.id !== action.payload.id
      );
      return {
        ...state,
        comments,
      };
    }
    default:
      return { ...state };
  }
};

export default reducer;
