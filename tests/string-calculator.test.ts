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
  test('should return sum if string contains new line delimiter', () => {
    expect(add('1\n,2,3')).toBe(6);
    expect(add('1,2\n3,1')).toBe(7);
  });
  test('should return sum if a custom delimiter is given in string', () => {
    expect(add('//;\n1;2;3')).toBe(6);
    expect(add('//&\n1&2\n3')).toBe(6);
  });
  test('should return error if string contains negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('negative numbers not allowed: -2');
    // multiple negative numbers
    expect(() => add('1,-2,-3')).toThrow('negative numbers not allowed: -2,-3');
    // with custom delimiter
    expect(() => add('//;\n1;-2;-3')).toThrow('negative numbers not allowed: -2,-3');
  });
});
