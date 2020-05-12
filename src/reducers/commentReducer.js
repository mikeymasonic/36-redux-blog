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
      return state.filter((_, i) => i !== action.payload);

    default:
      return state;
  }
}
