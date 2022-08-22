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
Coding Challenge #1
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


//  If - Else Statements ==========

const age = 15;
const isOldEnough = age >= 18;

if (age >= 18){
console.log('Sam can drive🚗');
}else {
    const yearsLeft = 18 - age;
    console.log(`Sam is too young . Wait another ${yearsLeft} years :)`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000){
    century = 20;
}else {
    century =21;
}
console.log(century);


// Coding Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark,BMIJohn)

if (BMIMark > BMIJohn){
    console.log(`Mark's BMI is larger  (${BMIMark}) BMI, compared to John's (${BMIJohn}) BMI`)
}else {
    console.log(`John's BMI is larger (${BMIJohn}) BMI, compared to Mark's (${BMIMark}) BMI`)
}


// Conversion and Coersion

// type conversion
const inputYear = '1991';
// Number() to convert Str to Num
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Travis'));
console.log(typeof NaN);// nAn is still a Num datatype

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');//23 convertd to a str
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('22' / '2');  

let n = '1' + 1;// = '11'
n = n - 1;// '11' - 1 = 10
console.log(n); 

console.log('10' - '4' - '3' - 2 + '5')//15
// '10' - '4' = 6, 6 - '3' = 3
// 3 - 2 = 1,  1 + '5' = 15


//  Truthy & Falsy Values  ===================

// 5 Falsy Values: 0, '', undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Travis"));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean({}));
// const money = 0;
// 0 if a Falsy value, 0 converted to false
 const money = 100;
if(money) {
    console.log("Don't spend it all")
} else {
    console.log('You should get a job')
}

// let height;
// no value yet, thus undefined
//undefined is a falsy value
// let height = 0 //also falsy
let height = 13;
if(height) {
    console.log('Height is defined')
} else {
    console.log('Height is undefined')
}


//  Equality Operators
const age = 18;
//const age = '18';

if(age === 18)console.log('you are adult(strict)');

if(age == 18)console.log('you are adult (loose)');

const favNum = Number(prompt("What's your favorite number"));
console.log(favNum, typeof favNum);

if(favNum === 23){
    console.log('23 is the num');
} else if(favNum == 7){
    console.log('7 is cool');
} else if(favNum === 9){
 console.log(' 9 is great')
} else{
    console.log('num is not 23, 9, or 7');
}

if(favNum !== 23) console.log('why not pick 23 ?')



// Boolean Logic

const hasDriversLicense = true; // A
const hasGoodVision = true;// B

console.log('and',hasDriversLicense && hasGoodVision);
console.log('or',hasDriversLicense || hasGoodVision);
console.log('not', !hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision){
    console.log('You can drive')
} else {
    console.log('not old enough')
}

const isTired = false; //c

console.log('or',hasDriversLicense || hasGoodVision || isTired);
console.log('and',hasDriversLicense &&hasGoodVision && isTired);//is tired opposite value

if(hasDriversLicense && hasGoodVision && !isTired){
    console.log('You can drive')
} else {
    console.log('not old enough')
}

//  Section 2 -Coding Challenge 3

// const dolphinsAvg = (96 + 108 + 89) / 3;
// const koalasAvg = (88 + 91 + 110) / 3;
// const koalasAvg = ((96 + 108 + 89) / 3);

// console.log('dolph', dolphinsAvg);
// console.log('koala', koalasAvg);

// if(dolphinsAvg > koalasAvg) {
//     console.log(`Dolphins win 🏆! Avg Score of ${dolphinsAvg}`);
// } else if(koalasAvg > dolphinsAvg){
//     console.log(`Koala win 🏆 !, avg ascore of ${koalasAvg}`);
// } else if (koalasAvg === dolphinsAvg){
// console.log(`TIE 🏆🏆both averages same`)
// } else {
//     console.log('incorrect data input')
// }

//Bonus 1
const dolphinsAvg = (97 + 112 + 101) / 3;
const koalasAvg = (109 + 95 + 106) / 3;
console.log(dolphinsAvg, koalasAvg);
const minimumAvg = 100;

if(dolphinsAvg > koalasAvg && dolphinsAvg >= minimumAvg) {
    console.log(`Dolphins win 🏆! Avg Score of ${dolphinsAvg}`);
} else if(koalasAvg > dolphinsAvg && koalasAvg >= minimumAvg){
    console.log(`Koala win 🏆 !, avg ascore of ${koalasAvg}`);
} else if (koalasAvg === dolphinsAvg && koalasAvg >= 100 && koalasAvg >= 100){
console.log(`TIE 🏆🏆both averages same`)
}  else {
    console.log('nobody wins the trophy ☹️')
}


//  Switch Statements

const day = 'saturday';

switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course');
        console.log('Go to coding meetup');
        break; // makes code stop running
    case 'tuesday':
        console.log('prep resume');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code')
        break;
    case 'friday':
        console.log('watch vids');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default: 
        console.log('not a valid date')
}

if(day === 'monday'){
    console.log('Plan course');
        console.log('Go to coding meetup');
} else if(day === 'tuesday'){
    console.log('prep resume');
} else if(day === 'wednesday' || day === 'thursday'){
    console.log('write code')
} else if (day === 'friday'){
    console.log('watch vids');
} else if(day === 'saturday' || day === 'sunday'){
    console.log('Enjoy the weekend');
} else {
    console.log('not a valid day')
} 



//  Statements and Expessions
// expression produce a value
// statements translates the actions
3 + 4 // expression
1991 //expression
true && false && !false // expression

//staement but no value produced
//the if statement is a statement
if(23 > 10){ 
    const str = '23 is bigger'; //expression
}

// template literals can only contain expressions, no statements
const me = 'travis'
console.log(`My name is ${me}, I am ${2022 - 1980} years old`)

// Conditional ( Terany Operator) Operator

const age = 42;
age >= 21 ? console.log("I'd like to drink a wine🍷") : console.log("I'd like to drink a water💦");

const drink = age >= 21 ? 'wine' : 'water';
console.log(drink);

let drink2;

if(age >= 21){
    drink2 = 'wine'
} else {
    drink2 = 'water'
}
console.log('drink2 is ', drink2);

console.log(` I like to drink ${drink}`);


// Section1 - Coding Challenge #3
 const bill = 275;
// const bill = 40;
// const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, the total was ${bill + tip}`);
*/

