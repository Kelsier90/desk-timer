import { formatTimeFromTimestamp } from "./time";

describe("helpers -> time", () => {
  describe("formatTimeFromTimestamp", () => {
    const cases = [
      [["0", "00", "05"], 5],
      [["0", "00", "59"], 59],
      [["0", "01", "00"], 60],
      [["0", "01", "59"], 119],
      [["0", "10", "10"], 610],
      [["0", "59", "59"], 3599],
      [["1", "00", "00"], 3600],
      [["1", "01", "01"], 3661],
      [["2", "00", "00"], 7200],
      [["2", "05", "05"], 7505],
    ];

    it.each(cases)("returns %p on %p timestamp", (expectedResult, ts) => {
      expect(formatTimeFromTimestamp(ts)).toEqual(expectedResult);
    });
  });
});
