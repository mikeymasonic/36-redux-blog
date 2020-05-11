export const ADD_COMMENT = 'ADD_COMMENT';
export const createComment = (comment, index) => ({
  type: ADD_COMMENT,
  payload: comment, index
});

export const DELETE_COMMENT = 'DELETE_COMMENTS';
export const deleteComment = (comment, index) => ({
  type: DELETE_COMMENT,
  payload: comment, index
});
