import { describe, it, expect } from 'vitest';
import { add } from '../src/math';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should return NaN when non-number arguments are passed', () => {
    const result = add('2' as any, 3);
    expect(result).toBeNaN();
  });
});
