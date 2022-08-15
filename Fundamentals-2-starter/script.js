"use strict";
/*
let hasDriversLicense = false;
const passedTest = true;

if(passedTest)hasDriversLicense = true;
if(hasDriversLicense) console.log('u can drive');
// interface, private, if etc are reserved word , can't use
// const interface = 'audio';
// const private = 55;
// const if = 'num';

// functions
function logger(){
    console.log('Hello i am Travis');
}
//invoking = running = calling function
logger(); 
logger(); 
logger(); 

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;  
}

console.log(fruitProcessor(5, 0));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// type num in console to see value
const num = Number('23');

// Function Ecpressions and Declerations

//  func DECLARATION 

const age1 = calcAge1(1980);// declaration can be called before defining

console.log(age1);

function calcAge1(birthYear){
     return 2022 - birthYear;
}

// function EXPRESSION
// expressions store a value
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}

const age2 = calcAge2(1980);
console.log(age1, age2);

//  AAROW FUNCTIONs

// expression
const calcAge2 = function(birthYear){
    return 2022 - birthYear;
}

// arrow
const calcAge3 = birthYear => 2022 - birthYear;

// save returned value to variable
const age3 = calcAge3(1980);
// print to console the value
console.log(age3);

// calc year until retirement
const yearsuntilRetire = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsuntilRetire(1980, 'travis'));
console.log(yearsuntilRetire(1995, 'sam'));

//  Functions calling functions

function cuttFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
   const applePieces = cuttFruitPieces(apples);
   const orangePieces = cuttFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces oranges`
    return juice;  
}
console.log(fruitProcessor(2, 3));
*/

//  Review Func

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsuntilRetire = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement;
  } else {
    console.log(`${firstName} has retired`)
    return -1;
  }
  
};

console.log(yearsuntilRetire(1980, "travis"));
console.log(yearsuntilRetire(1988, "sam"));
console.log(yearsuntilRetire(1950, "tom"));

//  Sec3 Challenge 1 =======================

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// console.log(calcAverage(44, 23, 71));

let scoreDolphin = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreKoala);

const checkWinner = (avgDolphin, avgKoala) => {
    // console.log(scoreDolphin, scoreKoala);
    if(avgDolphin >= 2 * avgKoala){
        console.log(`Dolp win with score of ${avgDolphin} vs ${avgKoala}`);
    } else if(avgKoala >= 2 * avgDolphin){
        console.log(`Koala win with score of ${avgKoala} vs ${avgDolphin}`);
    } else{
        console.log('nobody wins ...')
    }
} 

checkWinner(scoreDolphin, scoreKoala);
checkWinner(576, 111);
checkWinner(100, 300);

scoreDolphin = calcAverage(85, 54, 41);
scoreKoala = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoala);
checkWinner(scoreDolphin, scoreKoala);

