import { addComment, deleteComment } from '../actions/commentActions';
import reducer from './commentReducer';

describe('comment actions', () => {
  it('handles the ADD_COMMENT action', () => {
    const state = [{
      1: ['so kewl']
    }];
    const action = addComment(1, 'Try again, I can\'t believe I read this...');
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        1: ['so kewl', 'Try again, I can\'t believe I read this...']
      }
    ]);
  });

  it('handles the DELETE_COMMENT action', () => {
    const state = [
      {
        1: ['so kewl', 'Try again, I can\'t believe I read this...']
      }
    ];

    const action = deleteComment(0);
    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
