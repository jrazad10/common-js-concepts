//argument is array like object

function sum(a, b, c) {
    const args = [...arguments];
    // console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const totalSum = sum(10, 20, 30, 40, 50);
// console.log(totalSum);
console.log(sum.length);