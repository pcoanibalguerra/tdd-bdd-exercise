import { describe, expect, test } from 'vitest';
import { convertToRoman } from '../src/arabic';

describe('Arabic functions', () => {
  const testCases = [
    { input: 10, expected: 'X', description: '' },
    { input: 1, expected: 'I' },
    { input: 5, expected: 'V' },
    { input: 50, expected: 'L' },
    { input: 100, expected: 'C' },
    { input: 500, expected: 'D' },
    { input: 1567, expected: 'MDLXVII' },
    { input: 0, expected: 'El número debe estar entre 1 y 3999.', description: '' },
    { input: -1, expected: 'El número debe estar entre 1 y 3999.', description: '' },
    { input: 0.85, expected: 'El número debe ser entero', description: '' },
  ];

  test.each(testCases)('convertir $input a romano espero $expected', ({ input, expected }) => {
    try {
      const result = convertToRoman(input);
      console.log(result);
      expect(result).toEqual(expected);
    } catch (error: any) {
      expect(error.message).toEqual(expected);
    }
  });
});
