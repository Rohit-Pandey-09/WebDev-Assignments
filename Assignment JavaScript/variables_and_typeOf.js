//--------------Ques1---------------------------
// 1. String

let var1 = "Example of String datatype";
console.log(typeof var1);

// 2. Number :-
//     i) Integer:

let var2 = 43;
console.log(typeof var2);

//      ii) Floating Value
let var3 = 14.3;
console.log(typeof var3);

//   iii) infinity:
let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);

//      iv) Not a Number 
let var5 = NaN;
console.log(var5);

//          v) bigInt
let var6 = 3134n;
console.log(typeof var6);

// 3. Boolean
let var7 = true;
console.log(typeof var7);

// 4. Ubdefined
let var8 = undefined;
console.log(typeof var8);

// 5. Null
let var9 = null;
console.log(typeof var9); 

// 7. Symbol: 
let var10 = Symbol("Rohit Pandey");
console.log(typeof var10);

// 8. Objects:

//         i) Array
let var11 = [1,7,"Rohit"];
console.log(typeof var11);

//       ii) Object
let var12 = {
    name: "Rohit",
    agr: 21
}
console.log(typeof var12);


/*-------------------------Ques2-----------------------------*/

// Valid Variables
let myName = "Rohit Pandey";
console.log(myName); // output = Rohit Pandey

let iAmDeveloper = true;
console.log(iAmDeveloper);// output = true

// Invalid Variables:

let let = "Rohit Pandey";
console.log(let); //SyntaxError: let is disallowed as a lexically bound name

let 1year = true;
console.log(1year); // SyntaxError: Invalid or unexpected token
