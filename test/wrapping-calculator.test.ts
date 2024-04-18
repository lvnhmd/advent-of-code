import { calculateWrappingPaper, calculateRibbon } from "../src/wrapping-calculator";

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

describe('calculateRibbon', () => {
    it('calculates the correct total ribbon for a list of dimensions', () => {
        const dimensions: string[] = ["2x3x4", "1x1x10"];
        const expected = 34 + 14; 
        expect(calculateRibbon(dimensions)).toBe(expected);
    });

    it('returns zero if no dimensions are provided', () => {
        const dimensions: string[] = [];
        const expected = 0;
        expect(calculateRibbon(dimensions)).toBe(expected);
    });
});
