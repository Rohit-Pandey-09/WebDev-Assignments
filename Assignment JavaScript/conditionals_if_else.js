//-------------Ques1---------------------------------------

let trafficLight = "red";

if(trafficLight == "red"){
    console.log("!!!!Vehicles must Stop!!!!");
} else if(trafficLight == "orange"){
    console.log("The light is going to change in either green or red!!");
} else if(trafficLight == "green"){
    console.log("Vehicles can go now, Happy Journey :)");
} else{
    console.log("!!!!!!!!Invalid Traffic Colour!!!!!!!");
}

//--------------Ques2--------------------

let num1 = 26;
let num2 = 55;

if(num1 > num2){
    console.log(`${num1} is Larger than ${num2}`);
}else{
    console.log(`${num2} is Greater than ${num1}`);
}


//----------------------Ques3--------------------------

let num=30;
if(num % 15 == 0){
    console.log("FizzBuzz");
}else if(num % 3 == 0){
    console.log("Fizz");
}else if (num % 5 == 0){
    console.log("Buzz");
}else{
    console.log("!!!!! Error 404 not Found!!!!!");
}


