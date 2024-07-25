import add from '../src/index.ts';

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });
  test('should return the same number as sum if single', () => {
    expect(add('2')).toBe(2);
  });
  test('should return sum if there is trailing comma', () => {
    expect(add('1,')).toBe(1);
  });
  test('should return sum if numbers are interchanged', () => {
    expect(add('1,2')).toBe(3);
    expect(add('2,1')).toBe(3);
  });

});