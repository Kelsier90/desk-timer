import { formatTimeFromTimestamp } from "./time";

describe("helpers -> time", () => {
  describe("formatTimeFromTimestamp", () => {
    const cases = [
      [["00", "00", "05"], 5],
      [["00", "00", "59"], 59],
      [["00", "01", "00"], 60],
      [["00", "01", "59"], 119],
      [["00", "10", "10"], 610],
      [["00", "59", "59"], 3599],
      [["01", "00", "00"], 3600],
      [["01", "01", "01"], 3661],
      [["02", "00", "00"], 7200],
      [["02", "05", "05"], 7505],
    ];

    it.each(cases)("returns %p on %p timestamp", (expectedResult, ts) => {
      expect(formatTimeFromTimestamp(ts)).toEqual(expectedResult);
    });
  });
});
