export function add(a: number, b: number): number {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return NaN;
    }
    return a + b;
  }