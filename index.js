function mdc(a, b) {
    if (b === 0) {
        return a;
    } else {
        return mdc(b, a % b);
    }
}
function mmc(a, b) {
    return Math.abs(a * b) / mdc(a, b);
}
let num1 = 12;
let num2 = 18;
let resultado = mmc(num1, num2);

console.log(`MMC de ${num1} e ${num2} é: ${resultado}`);


