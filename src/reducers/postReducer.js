import { DELETE_POST, ADD_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];

    case UPDATE_POST:
      return state.map((post, i) => {
        if(i === action.payload.index) {
          return {
            title: action.payload.title,
            body: action.payload.body
          };
        }
        return post;
      });

    case DELETE_POST:
      return state.filter((_, i) => i !== action.payload);
      
    default:
      return state;
  }
}
