//---------------Ques1----------------------

let number = 9;
for(let i =1; i<=10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
} /*Output:
9 * 1 = 9
9 * 2 = 18
9 * 3 = 27
9 * 4 = 36
9 * 5 = 45
9 * 6 = 54
9 * 7 = 63
9 * 8 = 72
9 * 9 = 81
9 * 10 = 90
*/

let num1 = 15;
let num2 = 5;

console.log(`Addition of num1 and num2 = ${num1 + num2}`);

console.log(`Substraction of num1 and num2 = ${num1 - num2}`);

console.log(`Multiplication of num1 and num2 = ${num1 * num2}`);

console.log(`Division of num1 and num2 = ${num1 / num2}`);

console.log(`Modulas(remainder after num1/num2) of num1 and num2 = ${num1 % num2}`);

console.log(`Exponential of num1 and num2 = ${num1 ** num2}`);

/*
                   Output

    Addition of num1 and num2 = 20
Substraction of num1 and num2 = 10
Multiplication of num1 and num2 = 75
Division of num1 and num2 = 3
Modulas(remainder after num1/num2) of num1 and num2 = 0
Exponential of num1 and num2 = 759375


*/

//-------------Ques3----------------------

let length = 6, width = 5;
let perimeterRectangle = 2 * (length + width);

console.log(`The Perimeter of Rectangle with length ${length} and width ${width} will be : ${perimeterRectangle}`);

/*          Output     
The Perimeter of Rectangle with length 6 and width 5 will be : 22
*/

//----------------------Ques4------------------------------

 
let n1 = 10;
let n2 = 10;
let n3 = "10";
let n4 = 2;


// Equal to 
console.log(n1==n2); // true
console.log(n1==n3); // true
console.log(n3==n4); // false

// Not Equal to 
console.log(n1 != n4); // true
console.log(n1 != n2); // false

// Strictly Equal to 
console.log(n1 === n2);// true
console.log(n1 === n3); // false

// Strictly Not Equal to 
console.log(n1 !== n3);// true
console.log(n1 !== n2);// false

// Greater Than
console.log(n1 > n4); // true
console.log(n4 > n1); // false

// Greater Than or Equal to 
console.log(n1 >= n4); // true
console.log(n4 >= n1); // false

// Less Than 
console.log(n4 < n1); // true
console.log(n1 < n4); // false

// Less than or Equal to

console.log(n4 <= n1); // true
console.log(n1 <= n4); // false



