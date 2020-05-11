export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (comment, index) => ({
  type: CREATE_COMMENT,
  payload: comment, index
});
