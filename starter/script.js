/*
// values and variables, 

let js = "amazing";

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"; 
let first = "jonas";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";

let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJon = "Teacher";

console.log(myFirstJob);

let jsIsFun = true;

console.log(jsIsFun);
// console.log(typeof true);
console.log(typeof jsIsFun);
// console.log(typeof 44);
// console.log(typeof "tom");

jsIsFun = 'Yes';
console.log(jsIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(year);
console.log(typeof year);
console.log(null);


//  Let, Const  and Var

let age = 30;
age = 31;

// const can't be redeclaired or empty
const birthYear = 1991;
// birthYear = 1997;
// const job;
const job = 'ultrasound';

var newJob = 'programmer';
newJob = 'chef';
console.log(newJob);

lastName = 'Tybor';
console.log(lastName);


// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas/10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 *2
const firstName = 'Jon';
const lastName = 'Smith';
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; //x = x + 10
x *= 4; //x = x * 4
x++ // x = x + 1
x-- // x = x -1
console.log(x);

// Comparison operators
console.log( ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log( 25 - 10 -5);

let x , y;
x = y = 25 - 10 -5; // x = y = 10, x = 10
console.log(x,y);

const averageAge = (ageJonas + ageSarah)/2;
console.log(ageJonas, ageSarah, averageAge);

//====================
// BMI = mass / height ** 2 or BMI = mass / (height * height)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/

//  TEMPLATE LITERALS

const firstName = "Travis";
const job = 'student';
const birthYear = 1980;
currentYear = 2022;

const travis = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job + " !";
console.log(travis);

const travisNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job} !`;
console.log(travisNew);

console.log(`Just a string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);