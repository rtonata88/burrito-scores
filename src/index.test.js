import { titlesCount, schedules } from './index.js';

jest.mock('./index');

test('Count items', (done) => {
  schedules().then((schedule) => {
    try {
      expect(titlesCount(schedule.length)).toBe(2);
      done();
    } catch (error) {
      done(error);
    }
  });
});
