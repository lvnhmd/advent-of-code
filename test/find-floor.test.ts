import { findFloor } from '../src/find-floor';

describe('findFloor', () => {
  test('should return 0 for balanced parentheses like (()) and ()()', () => {
    expect(findFloor("(())")).toBe(0);
    expect(findFloor("()()")).toBe(0);
  });

  test('should return 3 for three more ( than )', () => {
    expect(findFloor("(((")).toBe(3);
    expect(findFloor("(()(()(")).toBe(3);
    expect(findFloor("))(((((")).toBe(3);
  });

  test('should return -1 for one more ) than (', () => {
    expect(findFloor("())")).toBe(-1);
    expect(findFloor("))(")).toBe(-1);
  });

  test('should return -3 for three more ) than (', () => {
    expect(findFloor(")))")).toBe(-3);
    expect(findFloor(")())())")).toBe(-3);
  });
});
