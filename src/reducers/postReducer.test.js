import { addPost, deletePost } from '../actions/postActions';
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

  it('handles the DELETE_DOG action', () => {
    const state = [
      {
        title: 'how I overcame my crippling fear of react',
        post: 'Just kidding, it\'s still there'
      }
    ];

    const action = deletePost(0);
    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
