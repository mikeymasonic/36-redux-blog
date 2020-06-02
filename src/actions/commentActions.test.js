import { addComment, ADD_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates an ADD_COMMENT action', () => {
    const action = addComment(2, 'Try again, I can\'t believe I read this...');
    expect(action).toEqual({
      type: ADD_COMMENT,
      payload: {
        index: 2,
        comment: 'Try again, I can\'t believe I read this...'
      }
    });
  });

  it('creates a DELETE_COMMENT action', () => {
    const action = deleteComment(311);

    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: 311
    });
  });
});

