import { getPosts } from './postSelectors';

describe('posts selectors', () => {
  it('gets a list of posts', () => {
    const state = [
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      }
    ];

    const posts = getPosts(state);

    expect(posts).toEqual([
      {
        title: 'how I overcame my crippling fear of react',
        body: 'Just kidding, it\'s still there'
      }
    ]);
  });
});
