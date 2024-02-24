// js is dynamic typed language 

//premitive type
const a = 5;
const b = 'samasu kopa';
const d = true;

// non premitive 
const ages = [10, 12, 14];
const student = { id: 23, class: 47 };
// console.log(typeof a, typeof b, typeof ages, typeof student, typeof d);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'web-developer' };
q = p;
q.job = 'front end developer'
console.log(p, q);