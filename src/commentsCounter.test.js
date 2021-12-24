import commentCount from './commentsCounter.js';

const comments = () => Promise.resolve([
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
]);

test('should count comments', async () => {
  const comment = await comments();
  expect(commentCount(comment)).toBe(3);
});