//single line comment
/*multi line comment*/
var myName; //Subtask 2
var a; //Subtask 3
a=7; //Subtask 3
var b; //Subtask 4
b=a; //Subtask 4
var a = 9; //Subtask 5
var myFirstName = "Shaheer"; //Subtask 6
var myLastName = "Hashmi"; //Subtask 6
var a = 5; //Subtask 7
var b = 10; //Subtask 7
var c = "I am a"; //Subtask 7
// Variable declarations for subtask 8
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
// Variable assignments for subtask 8
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
let catName = "Oliver"; //Subtask 9
let catSound = "Meow!"; //Subtask 9
const FCC = "freeCodeCamp"; //Subtask 10
let fact = "is cool!"; //Subtask 10
fact = "is awesome!"; //Subtask 10
console.log(FCC, fact); //Subtask 10
const sum = 10 + 10; //Subtask 11
const difference = 45 - 33; //Subtask 12
const product = 8 * 10; //Subtask 13
const quotient = 66 / 33; //Subtask 14
let myVar = 87; //Subtask 15
// Only change code below this line
myVar++;
let myVar = 11; //Subtask 16
// Only change code below this line
myVar--;
const myDecimal = 5.7; //Subtask 17
const product = 2.0 * 2.5; //Subtask 18
const quotient = 4.4 / 2.0; //Subtask 19
const remainder = 11 % 3; //Subtask 20
let a = 3; //Subtask 21
let b = 17; //Subtask 21
let c = 12; //Subtask 21
// Only change code below this line
a += 12; //Subtask 21
b += 9; //Subtask 21
c += 7; //Subtask 21

let a = 11; //Subtask 22
let b = 9; //Subtask 22
let c = 3; //Subtask 22
// Only change code below this line
a -= 6; //Subtask 22
b -= 15; //Subtask 22
c -= 1; //Subtask 22

let a = 5; //Subtask 23 started
let b = 12;
let c = 4.6;
// Only change code below this line
a *= 5;
b *= 3;
c *= 10; //Subtask 23 ended

let a = 48; //Subtask 24 started
let b = 108;
let c = 33;
// Only change code below this line
a /= 12;
b /= 4;
c /= 11; //Subtask 24 ended
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; //Subtask 25
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; //Subtask 26
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; //Subtask 27
const myStr = "This is the start." + " This is the end."; //Subtask 28
let myStr; //Subtask 29 started
myStr = "This is the first sentence.";
myStr += " This is the second sentence." //Subtask 29 ended

const myName = "Shaheer"; //Subtask 30
const myStr = "My name is " + myName + " and I am well!"; //Subtask 30

const someAdjective = "great"; //Subtask 31 started
let myStr = "Learning to code is ";
myStr += someAdjective; //Subtask 31 ended

// Subtask 32 started
let lastNameLength = 0; 
const lastName = "Lovelace";
lastNameLength = lastName.length; //Subtask 32 ended

let firstLetterOfLastName = ""; // Subtask 33 started
const lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; //Subtask 33 ended

let myStr = "Jello World"; //Subtask 34 started
myStr = "Hello World"; //Subtask 34 ended

const lastName = "Lovelace"; //Subtask 35 started
const thirdLetterOfLastName = lastName[2]; //Subtask 35 ended

const lastName = "Lovelace"; //Subtask 36 started
const lastLetterOfLastName = lastName[lastName.length - 1] //Subtask 36 ended

const lastName = "Lovelace"; //Subtask 37 started
const secondToLastLetterOfLastName = lastName[lastName.length - 2] //Subtask 37 ended

const myNoun = "dog"; //Subtask 38 started
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = myNoun + " " + myAdjective + " " + " " + myVerb + " " + myAdverb; //Subtask 38 ended

const myArray = ["my string", 1]; //Subtask 39
const myArray = [["my array1", 1], ["my array2", 2]]; //Subtask 40

const myArray = [50, 60, 70]; //Subtask 41
const myData = myArray[0]; //Subtask 41

const myArray = [18, 64, 99]; //Subtask 42
myArray[0] = 45; //Subtask 42

const myArray = [   //Subtask 43 started
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
const myData = myArray[2][1]; //Subtask 43 ended

const myArray = [["John", 23], ["cat", 2]]; //Subtask 44
myArray.push(["dog", 3]); //Subtask 44

const myArray = [["John", 23], ["cat", 2]]; //Subtask 45
const removedFromMyArray = myArray.pop(); //Subtask 45

const myArray = [["John", 23], ["dog", 3]]; //Subtask 46
const removedFromMyArray = myArray.shift(); //Subtask 46

const myArray = [["John", 23], ["dog", 3]]; //Subtask 47 started
myArray.shift();
myArray.unshift(["Paul", 35]); //Subtask 47 ended

const myList = [["Chocolate", 15], ["Pepsi", 2], ["Chips", 5], ["Sandwich", 1], ["Fruits", 3]]; //Subtask 48

function reusableFunction() { //Subtask 49 started 
    console.log("Hi World");
  }
  reusableFunction(); //Subtask 49 ended

function functionWithArgs(digit1, digit2) { //Subtask 50 started 
    console.log(digit1 + digit2);
  }
  functionWithArgs(2,4); //Subtask 50 ended

function timesFive(num) { //Subtask 51 started 
    return num * 5;
}
timesFive(5);
timesFive(2);
timesFive(0); //Subtask 51 ended

//Subtask 52 started 
// Declare the myGlobal variable below this line   
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
} //Subtask 52 ended

//Subtask 53 started 
function myLocalScope() {
    // Only change code below this line
    const myVar = "foo";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar); //Subtask 53 ended

//Subtask 54 started 
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit(); //Subtask 54 ended

// Subtask 55 started
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive(); //Subtask 55 ended

//Subtask 56 started
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7); //Subtask 56 ended

function nextInLine(arr, item) { //Subtask 57 started
    // Only change code below this line
    arr.push(item);
    var temp = arr.shift(); 
    return temp;
    // Only change code above this line
  }
  // Setup
const testArr = [1, 2, 3, 4, 5];
  // Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); //Subtask 57 ended