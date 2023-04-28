//-------------Ques1-------------------------

let num = 3;

num == 0
	? console.log(`${num} is neither positive, nor negative`)
	: num < 0
	? console.log(`${num} is a negative number`)
	: console.log(`${num} is a positive number`);

//----------------Ques2----------------------

let num1 = 32;
let num2 = 45;

num1 == num2
	? console.log(`Both numbers are Equal`)
	: num1 > num2
	? console.log(`${num1} is greater than ${num2}`)
	: console.log(`${num2} is greater than ${num1}`);
