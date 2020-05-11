export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment, index) => ({
  type: CREATE_COMMENT,
  payload: comment, index
});

export const DELETE_COMMENT = 'DELETE_COMMENTS';
export const deleteComment = (comment, index) => ({
  type: DELETE_COMMENT,
  payload: comment, index
});
