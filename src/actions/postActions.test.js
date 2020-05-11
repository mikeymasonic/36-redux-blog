import { addPost, ADD_POST } from './postActions';

describe('post actions', () => {
  it('creates an ADD_POST action', () => {
    const action = addPost({
      title: 'how I overcame my crippling fear of react',
      post: 'Just kidding, it\'s still there'
    });

    expect(action).toEqual({
      type: ADD_POST,
      payload: {
        title: 'how I overcame my crippling fear of react',
        post: 'Just kidding, it\'s still there'
      }
    });
  });
});
