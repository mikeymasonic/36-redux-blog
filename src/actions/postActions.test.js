import { addPost, ADD_POST, deletePost, DELETE_POST } from './postActions';

describe('post actions', () => {
  it('creates an ADD_POST action', () => {
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

  it('creates a DELETE_POST action', () => {
    const action = deletePost(311);

    expect(action).toEqual({
      type: DELETE_POST,
      payload: 311
    });
  });
});
