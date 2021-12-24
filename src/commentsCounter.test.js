import commentCount from './commentsCounter.js';

describe('test comment count function', () => {
  test('test number of comments from the API', () => {
    const comment = [
      {
        comment: 'Great',
        creation_date: '2021-12-24',
        username: 'burrito',
      },
      {
        comment: 'Nice',
        creation_date: '2021-12-24',
        username: 'Manuel',
      },
      {
        comment: 'Awesome',
        creation_date: '2021-12-24',
        username: 'richard',
      },
    ];
    expect(commentCount(comment)).toBe(3);
  });
});