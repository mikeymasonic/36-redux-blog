import { getComments } from './commentSelectors';

describe('commentSelectors tests', () => {
  it('gets a comment by the post index', () => {
    const state = [
      {
        1: ['so kewl', 'Try again, I can\'t believe I read this...']
      },
      {
        2: ['no']
      }
    ];

    const comments = getComments(state, 1);
    expect (comments).toEqual(
      {
        1: ['so kewl', 'Try again, I can\'t believe I read this...']
      }
    );
  });
});
