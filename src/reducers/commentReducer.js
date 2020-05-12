import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = {
  comments: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_COMMENT:
      return { ...state, comments: { ...state.comments, [action.payload.index]: [...(state.comments[action.payload.index] || []), action.payload.comment] } };

    case DELETE_COMMENT:
      return { ...state, comments: { ...state.comments, [action.payload.index]: [
        ...state.comments[action.payload.index].slice(0, action.payload.index),
        ...state.comments[action.payload.index].slice(action.payload.index + 1)
      ] } };
  }
}
