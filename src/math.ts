export const binominal = (k: number, n: number, p: number): number => {
    const q = 1 - p;
    const n1 = fact(n)/(fact(n - k) * fact(k));
    const n2 = (Math.pow(p, k)) * Math.pow(q, n - k);
    return n1 * n2
}
const fact = (n: number): number => {
    let total = 1.0;
    for(let i = 1; i <= n; i++) {
        total *= i;
    }
    return total;
}
