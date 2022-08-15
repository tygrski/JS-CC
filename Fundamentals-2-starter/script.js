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


// Arrays

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);
//  Array function, parenthesis and key word new Array
const y = new Array(1991, 1984, 2008, 2020);
console.log(new Array());

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
//  cant do this
// friends = ["Bob"];

const firstName = "Travis";
const travis = [firstName, "Tybor", 2022 - 1980, friends];
console.log(travis);
console.log(travis.length);

// array exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1980, 1967, 2022, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/
//  Basic ARRAY Methods

const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
//frineds.push('Jay') returns the value of the array lenght
console.log(newLength);// logs 4

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // last value, doesn't need a arguement, sinve it removes last element. 
// pop returns a value , not the lenght, but the element it removed
const popped = friends.pop();
console.log(friends);
console.log(popped);

friends.shift();// First
console.log(friends)

// position of element
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); // -1 returns a value , bob is not in array, -1
//boolean true or false value returned
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

friends.push(23);
// below wont work bec it's Strng
console.log(friends.includes('23'));
//will work 
console.log(friends.includes(23));
console.log(friends);

if(friends.includes('Steven')){
    console.log('you have a friend named Steven');
}

// Sec 2 - Challenge 2

const calcTip = function(bill) {
     return bill >= 50 && bill <= 300 ? bill *0.25 : bill * .2
}
// Arrow version
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.25 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(bill, tip);


const billMeal = [125, 555, 44];
const tip1 = calcTip(bill[0]);
const tip2 = calcTip(bill[1]);
const tip3 = calcTip(bill[2]);


console.log(tip1, tip2, tip3);

//  Bonus 
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]]
console.log(total);


