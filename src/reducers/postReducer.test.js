import { addPost } from '../actions/postActions';
import reducer from './postReducer';

describe('posts reducer', () => {
  it('handles the ADD_POST action', () => {
    const state = [];
    const action = addPost({
      title: 'how I overcame my crippling fear of react',
      post: 'Just kidding, it\'s still there'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'how I overcame my crippling fear of react',
        post: 'Just kidding, it\'s still there'
      }
    ]);
  });
});
