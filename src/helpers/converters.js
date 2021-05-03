export function convertInEuro(sum, currency) {
    const result = sum / currency;
    return Math.ceil((result) * 100) / 100;
}