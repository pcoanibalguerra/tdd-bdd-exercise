import { describe, it, expect, test } from 'vitest';
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
    // { input: 0, expected: '', description: 'El numero 0 no existe en numeros romanos' },
    // { input: -1, expected: '', description: 'El numero numeros negativos no aplican' },
    // { input: 0.85, expected: '', description: 'El numeros decimales no aplican' },
  ];

  test.each(testCases)('convertir $input a romano espero $expected', ({ input, expected }) => {
    const result = convertToRoman(input);
    console.log(result);
    expect(result).toEqual(expected);
  });
});
