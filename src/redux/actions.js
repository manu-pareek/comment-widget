exports.addComment = (payload) => {
  return {
    type: "ADD_COMMENT",
    payload: payload,
  };
};
exports.addLike = (payload) => {
  return {
    type: "ADD_LIKE",
    payload: payload,
  };
};
exports.addDislike = (payload) => {
  return {
    type: "ADD_DISLIKE",
    payload: payload,
  };
};
exports.removeLike = (payload) => {
  return {
    type: "REMOVE_LIKE",
    payload: payload,
  };
};
exports.removeDislike = (payload) => {
  return {
    type: "REMOVE_DISLIKE",
    payload: payload,
  };
};
exports.deleteComment = (payload) => {
  return {
    type: "DELETE_COMMENT",
    payload: payload,
  };
};
exports.editComment = (payload) => {
  return {
    type: "EDIT_COMMENT",
    payload: payload,
  };
};
