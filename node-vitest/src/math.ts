export function add(a: number, b: number): number {
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return NaN;
    }
    const result =  a + b; 
    return result;
  }