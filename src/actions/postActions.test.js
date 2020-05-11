import { addPost, ADD_POST, deletePost, DELETE_POST, updatePost, UPDATE_POST } from './postActions';

describe('post actions', () => {
  it('creates a ADD_POST action', () => {
    const action = addPost({
      title: 'how I overcame my crippling fear of react',
      body: 'Just kidding, it\'s still there'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      }
    });
  });

  it('creates a UPDATE_POST action', () => {
    const action = updatePost(2, 'This is a new title', 'This is a new body');

    expect(action).toEqual({
      type: UPDATE_POST,
      payload: {
        index: 2,
        title: 'This is a new title',
        body: 'This is a new body'
      }
    });
  });

  it('creates a DELETE_POST action', () => {
    const action = deletePost(311);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 311
    });
  });
});
