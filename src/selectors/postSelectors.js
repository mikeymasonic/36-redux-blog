export const getPosts = state => state;

export const getPostByIndex = (state, index) =>
  getPosts(state).find((_, i) => i === index);
