//4. Rewrite this if using the ternary/conditional operator '?'. 
//Test it with different values for aand b. What does the ‘+=’ do?

let a = 6, b = 11;
let result = `${a} + ${b} is `;
if (a += b < 10) {
result += 'less than 10';
} else {
result += 'greater than 10';
}
console.log (a + b < 10  ? 'less than 10' : 'greater than 10');

let c = 5, d = 3;
console.log (a + d < 10 ? 'less than 10' : 'greater than 10');