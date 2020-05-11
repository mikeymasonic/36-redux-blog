import { addPost, deletePost, updatePost } from '../actions/postActions';
import reducer from './postReducer';

describe('posts reducer', () => {
  it('handles the ADD_POST action', () => {
    const state = [];
    const action = addPost({
      title: 'how I overcame my crippling fear of react',
      body: 'Just kidding, it\'s still there'
    });

    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      }
    ]);
  });

  it('handles the UPDATE_POST action', () => {
    const state = [
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      },
      {
        title: 'being a JS developer in a post pandemic world',
        body: 'same stuff, just way more stress'
      }
    ];
    const action = updatePost(1, 'This is a new title', 'This is a new body');
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      },
      {
        title: 'This is a new title',
        body: 'This is a new body'
      }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const state = [
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      }
    ];

    const action = deletePost(0);
    const newState = reducer(state, action);

    expect(newState).toEqual([]);
  });
});
