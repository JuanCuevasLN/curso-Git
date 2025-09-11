const suma = (num1: number, num2: number) => {
    return num1 + num2;
}

const division = (num1: number, num2: number) => {
    if (num2 == 0) return 0
    return num1 - num2;
}

console.log(suma(3,5));
console.log(division(4,6));