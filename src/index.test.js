import { titlesCount, schedules } from "./index.js";

jest.mock("./index");

test("Count items", () => {
  schedules().then((schedule) => {
    expect(titlesCount(schedule.length)).toBe(2);
  });
});
