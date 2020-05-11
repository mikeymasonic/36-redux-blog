import { getPosts, getPostByIndex } from './postSelectors';

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

  it('gets a post by index', () => {
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

    const post = getPostByIndex(state, 1);
    expect(post).toEqual({
      title: 'being a JS developer in a post pandemic world',
      body: 'same stuff, just way more stress'
    });
  });

});
