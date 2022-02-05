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

//Subtask 58 started
function welcomeToBooleans() {
    // Only change code below this line
    return true; // Change this line
    // Only change code above this line
  } //Subtask 58 ended

//Subtask 59 started
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line
  }
  trueOrFalse(true);
  trueOrFalse(false); //Subtask 59 ended

  //Subtask 60 started
  function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  testEqual(10); //Subtask 60 ended

  //Subtask 61 started
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10); //Subtask 61 ended
 
  //Subtask 62 started
  function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  compareEquality(10, "10"); //Subtask 62 ended

  //Subtask 63 started
  function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testNotEqual(10); //Subtask 63 ended

  //Subtask 64 started
  function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  testStrictNotEqual(10); //Subtask 64 ended

  //Subtask 65 started
  function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
    if (val > 10) {  // Change this line
      return "Over 10";
    }
    return "10 or Under";
  }
  testGreaterThan(10); //Subtask 65 ended

  //Subtask 66 started
  function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  testGreaterOrEqual(10); //Subtask 66 ended

  //Subtask 67 started
  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  testLessThan(10); //Subtask 67 ended

  //Subtask 68 started
  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <=24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  testLessOrEqual(10); //Subtask 68 ended

  //Subtask 69 started
  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val<=50 && val>=25) {
        return "Yes";
    }
    // Only change code above this line
    return "No";
  }
  testLogicalAnd(10); //Subtask 69 ended

  //Subtask 70 started
  function testLogicalOr(val) {
    // Only change code below this line
  
    if (val < 10 || val >20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  testLogicalOr(15); //Subtask 70 ended

  //Subtask 71 started
  function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  testElse(4); //Subtask 71 ended

  //Subtask 72 started
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
    else if (val < 5) {
      return "Smaller than 5";
    }
    else {
      return "Between 5 and 10";
    }
  }
  testElseIf(7); //Subtask 72 ended

  //Subtask 73 started
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  orderMyLogic(7); //Subtask 73 ended

  //Subtask 74 started
  function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } 
    else if (num<10) {
      return "Small";
    }
    else if (num<15) {
      return "Medium";
    }
    else if (num<20) {
      return "Large";
    }
    else {
      return "Huge"
    }
    // Only change code above this line
  }
  testSize(7); //Subtask 74 ended

 //Subtask 75 started
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes==1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes == par-1) {
    return names[2];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if (strokes == par+1) {
    return names[4];
  }
  else if (strokes == par+2) {
    return names[5];
  }
  else if (strokes >= par+3) {
    return names[6];
  }
  // Only change code above this line
}
golfScore(5, 4); //Subtask 75 ended

//Subtask 76 started
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
          answer = "alpha";
          break;
        case 2:
          answer = "beta";
          break;
        case 3:
          answer = "gamma";
          break;
        case 4:
          answer = "delta";
          break;
    }
    return answer;
    // Only change code above this line
  }
  caseInSwitch(1); //Subtask 76 ended

  //Subtask 77 started
  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
        case "a":
          answer = "apple";
          break;
        case "b":
          answer = "bird";
          break;
        case "c":
          answer = "cat";
          break;
        default:
          answer = "stuff";
          break;
    }
    // Only change code above this line
    return answer;
  }
  switchOfStuff(1); //Subtask 77 ended

  //Subtask 78 started
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
          case 1:
          case 2:
          case 3:
            answer = "Low";
            break;
          case 4:
          case 5:
          case 6:
            answer = "Mid";
            break;
          case 7:
          case 8:
          case 9:
            answer = "High";
            break;
      }
    // Only change code above this line
    return answer;
  }
  sequentialSizes(1); //Subtask 78 ended

  //Subtask 79 started
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "bob":
          answer = "Marley";
          break;
        case 42:
          answer = "The Answer";
          break;
        case 1:
          answer = "There is no #1";
          break;
        case 99:
          answer = "Missed me by this much!";
          break;
        case 7:
          answer = "Ate Nine";
          break;
    }
  
    // Only change code above this line
    return answer;
  }
  chainToSwitch(7); //Subtask 79 ended