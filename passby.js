//premitive are pass by value
let num1 = 5;
let num2 = 7;
function multiply(a, b) {
    a = 27;
    const result = a * b;
    return result;
}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);

//object and array are pass by refference
let student1 = { name: 'jalil', partner: 'borsha' };
let student2 = { name: 'raj', partner: 'mitila' };

function makeMovie(couple1, coupl2) {
    couple1.name = 'ananta';
    coupl2.partner = 'mim';
}
console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
