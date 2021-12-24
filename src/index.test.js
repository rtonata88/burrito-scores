import { titlesCount, schedules } from './index.js';

jest.mock('./index');

test('Count items', async () => {
  const schedule = await schedules();
  expect(titlesCount(schedule.length)).toBe(3);
});
