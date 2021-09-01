import { diffInDays } from "../helpers/dates";

test("Checks two dates and expects the diff to be 1 day", () => {
  expect(
    diffInDays("2021-08-31T13:40:21.090884Z", "2021-08-31T16:32:21.090884Z")
  ).toBe(1);
});
