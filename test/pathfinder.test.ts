import { findFloor, findBasementEntry } from '../src/pathfinder';

describe('findFloor', () => {
  test('should return 0 for balanced parentheses like (()) and ()()', () => {
    expect(findFloor('(())')).toBe(0);
    expect(findFloor('()()')).toBe(0);
  });

  test('should return 3 for three more ( than )', () => {
    expect(findFloor('(((')).toBe(3);
    expect(findFloor('(()(()(')).toBe(3);
    expect(findFloor('))(((((')).toBe(3);
  });

  test('should return -1 for one more ) than (', () => {
    expect(findFloor('())')).toBe(-1);
    expect(findFloor('))(')).toBe(-1);
  });

  test('should return -3 for three more ) than (', () => {
    expect(findFloor(')))')).toBe(-3);
    expect(findFloor(')())())')).toBe(-3);
  });
});

describe('findBasementEntry', () => {
  
  test('should return -1 when ) does not exist', () => {
      expect(findBasementEntry('(')).toBe(-1);
  });

  test('should return 1 when ) is the first character', () => {
    expect(findBasementEntry(')')).toBe(1);
  });

  test('should return 5 when preceded by balanced parentheses', () => {
      expect(findBasementEntry('()())')).toBe(5);
  });
});
