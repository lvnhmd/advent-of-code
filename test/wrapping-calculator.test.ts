import { calculateWrappingPaper } from "../src/wrapping-calculator";

describe("calculateWrappingPaper", () => {
  it("should calculate the correct amount of wrapping paper for multiple dimensions", () => {
    const dimensions = ["2x3x4", "1x1x10"];
    const expected = 58 + 43;
    expect(calculateWrappingPaper(dimensions)).toBe(expected);
  });

  it("should return 0 if no dimensions are provided", () => {
    const dimensions: string[] = [];
    const expected = 0;
    expect(calculateWrappingPaper(dimensions)).toBe(expected);
  });
});
