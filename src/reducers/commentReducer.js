import { ADD_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case ADD_COMMENT:
      return state.map((comments) => {
        if(action.payload.index) {
          comments[action.payload.index].push(action.payload.comment);
        }
        return comments;
      });
      
    case DELETE_COMMENT:
      return { ...state, comments: { ...state.comments, [action.payload.index]: [
        ...state.comments[action.payload.index].slice(0, action.payload.index),
        ...state.comments[action.payload.index].slice(action.payload.index + 1)
      ] } };
    default:
      return state;
  }
}
