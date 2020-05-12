export const ADD_COMMENT = 'ADD_COMMENT';
export const addComment = (index, comment) => ({
  type: ADD_COMMENT,
  payload: {
    index, 
    comment
  }
});

export const DELETE_COMMENT = 'DELETE_COMMENT';
export const deleteComment = (index, comment) => ({
  type: DELETE_COMMENT,
  payload: index, comment
});
