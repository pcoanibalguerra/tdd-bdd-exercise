export function convertToRoman(num: number): string {
    if (num <= 0 || num > 3999) {
        throw new Error("El número debe estar entre 1 y 3999.");
    }
    if (!Number.isInteger(num)) {
        throw new Error("El número debe ser entero");
    }
    const romanNumerals: { [key: number]: string } = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I",
    };
    let result = "";
    const keys = Object.keys(romanNumerals)
        .map(Number)
        .sort((a, b) => b - a);
    for (const key of keys) {
        while (num >= key) {
            result += romanNumerals[key];
            num -= key;
        }
    }
    return result;
}
