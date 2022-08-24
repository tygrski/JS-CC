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


// Arrays ================================================

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

// array exercise ===================================
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

//  Basic ARRAY Methods ===============================

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

// Sec 2 - Challenge 2 =====================================

const calcTip = function(bill) {
     return bill >= 50 && bill <= 300 ? bill *0.25 : bill * .2
}
// Arrow version
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.25 : bill * 0.2;

const bill = [125, 555, 44];
const tip = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

console.log(bill, tip);

// unsing without tip array
// const billMeal = [125, 555, 44];
// const tip1 = calcTip(bill[0]);
// const tip2 = calcTip(bill[1]);
// const tip3 = calcTip(bill[2]);
// console.log(tip1, tip2, tip3);

//  Bonus 
const total = [bill[0] + tip[0], bill[1] + tip[1], bill[2] + tip[2]]
console.log(total);


//  Objects =================================================

// const travisArray = [
//     'traivs',
//     'tybor',
//     2037 - 1980,
//     'student',
//     ['Michael', 'Peter', 'Steven']
// ];



const travis = {
    firstName: 'Travis',
    lastName:'Tybor',
    age: 2037 -1980,
    friends: ['Michael', 'Peter', 'Steven'],
    job: 'student'
}

console.log(travis);

console.log(travis.lastName);
console.log(travis['lastName']);

const nameKey = 'Name';
console.log(travis['first' + nameKey]);
console.log(travis['last' + nameKey]);

const interestedIn = prompt('what do you want to know about Travis? Choose between firstName, lastName, age, job, and friends ');
console.log(travis[interestedIn]);

if(travis[interestedIn]){
    console.log(travis[interestedIn])
} else {
    console.log('Wrong request. Choose between firstName, lastName, age, job, and friends ');
}

//  adding to  an existing object
travis.location= 'Texas';
travis['twitter'] = '@travisTweet';
console.log(travis);

// Challenge
console.log(`${travis.firstName} has ${travis.friends.length} friends and his best friend is ${travis.friends[0]}`);


//  Object Methods ===================
const travis = {
    firstName: 'Travis',
    lastName:'Tybor',
    birthYear: 1980,
    friends: ['Michael', 'Peter', 'Steven'],
    job: 'student',
    hasDriversLicense: true,
    
    // calcAge: function(birthYear){
    //     return 2037 -birthYear;
    // }
    // 
    calcAge: function(){
       this.age = 2037 - this.birthYear;
       return this.age
    },

    getSummary: function(){
        
            return `${this.firstName} is a ${this.calcAge()}- year old student,${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license `
        
    }
}

console.log(travis.calcAge(1980));
console.log(travis.calcAge());
// console.log(travis['calcAge'](1980));
console.log(travis.age);
console.log(travis.getSummary());

//  Sec 3 - Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBmi: function(){
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI at ${mark.bmi} is bigger than ${john.fullName}'s BMI of ${john.bmi}`)
} else if (john.bmi > mark.bmi){
console.log(`${john.fullName}'s BMI at ${john.bmi} is bigger than ${mark.fullName}'s BMI of ${mark.bmi}`)}


// Iteration - For Loop  ====================================

for(let rep = 1; rep <= 10; rep ++){
    console.log(`Lifting weights repetition ${rep} 🏋🏽`)
}

for(let rep = 1; rep <= 30; rep ++){
    console.log(`Lifting weights repetition ${rep} 🏋🏽`)
}

//  Looping Array, Breaking and Continuing ==================

const travisArray = [
    'traivs',
    'tybor',
    2037 - 1980,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i < travisArray.length; i++){
    //  reading from travisArray
    console.log(travisArray[i], typeof travisArray[i])

    // Filling an Array
    // types[i] = typeof travisArray[i];

    // adding to Array
    types.push(typeof travisArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages  = [];

for(let i = 0; i < years.length; i++){
    ages.push(2037 - years[i]);
}

console.log(ages);

//  Continue and Break
console.log('---- Only STRINGS')
for(let i = 0; i < travisArray.length; i++){
    if(typeof travisArray[i] !== 'string') continue;

    console.log(travisArray[i], typeof travisArray[i])
}


console.log('---- Break at NUM in Array')
for(let i = 0; i < travisArray.length; i++){
    if(typeof travisArray[i] === 'number') break;

    console.log(travisArray[i], typeof travisArray[i])
}


//  Looping backwards through array =================
const travisArray = [
    'traivs',
    'tybor',
    2037 - 1980,
    'student',
    ['Michael', 'Peter', 'Steven'],
    true
];

for(let i = travisArray.length - 1; i >= 0; i-- ){
    console.log(i, travisArray[i]);
}

// Loop in a Loop  ========================================
//  log exercise 1,2,3

for( let exercise = 1; exercise <=3; exercise++ ){
    console.log(`======= Start Exercise ${exercise}`)

    // 5 repitions per exercise
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise} Lifting weight repitition ${rep} 🏋🏽`)
    }
}


//  WHILE Loops  ============================================

// for(let rep = 1; rep < 10; rep++){
//     console.log(`forLoop Lifting weight repitition ${rep} 🏋🏽`)
// }

let rep = 1;
while (rep <= 10) {
  //  console.log(`WhileLoop Lifting weight repitition ${rep} 🏋🏽`)
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`you rolled ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`you rolled a ${dice} ! , loop ends`);
}

//  Sec 3 Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const tipAmmount = calcTip(bills[i]);
  tips.push(tipAmmount);
  totals.push(tipAmmount + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  // use let because sum will change as we loop the arr
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

//
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


//  Given an arr of tempd of one day, calculate the temp amplitude. Keep in mind that sometimes there may be a sensor error

const tempatures = [3, -2, -1, 'error', 9, 13, 17, 15, -6, 14, 9, 5];

//=== Understand the problem ===============
// 1) what is temp amp ? Ans, difference btw highest and    lowest temp. Value we return from function
// 2) How to compute max and min value in arr(tempatures) ?
// 3) what a sensor error and what to do when it occurs ?

//=== Break up into small sub-problems ======================
// 1) How to ignore sensor error
// 2) Find the max value in temp array
// 3) FInd minimum value
// 4) Subtract min from max and return it

//  Prob 2 , function to recieve 2 temp arrays
//  should we use same funciton twice ? NO , easiest to merge 2 arrays into 1
//  How to merge 2 arrays

const calcTempAmplitude = function(temps){
    
    let max = temps[0];
    let min = temps[0];
    
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
    //  continue if temp is a not a num value
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    };
    console.log(max, min);
    return max - min;
}
calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(tempatures);
console.log(amplitude);

//  with 2 arrays

const calcTempAmplitudeNew = function(t1, t2){
    const temps = t1.concat(t2);
    console.log(temps);
    
    let max = temps[0];
    let min = temps[0];
    
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
    //  continue if temp is a not a num value
        if(typeof curTemp !== 'number') continue;
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    };
    console.log(max, min);
    return max - min;
}
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);

// Debugging ==================================

const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celcius',

        //  Fix Str to Num
        // value: Number(prompt('Degree Celcius')),
        value: 10
    }
console.log(measurement);
console.table(measurement)

    console.log(measurement.value); // correct value
    // console.warn(measurement.value); 
    // console.error(measurement.value); 
   
    const kelvin = measurement.value + 273;
    return kelvin;
}
// Identify bug
console.log(measureKelvin()); 

// Biggre Bug

const calcTempAmplitudeNewBug = function(t1, t2){
    const temps = t1.concat(t2);
    console.log(temps);
    
    let max = 0;
    let min = 0;
    // bug above because 0 < 1, 1 is the lowest temp
    // creates bug here: if(curTemp < min) min = curTemp;
    
    for(let i = 0; i < temps.length; i++){
        const curTemp = temps[i];
    //  continue if temp is a not a num value
        if(typeof curTemp !== 'number') continue;

       
        if(curTemp > max) max = curTemp;
        if(curTemp < min) min = curTemp;
    };
    console.log(max, min);
    return max - min;
}
const amplitudeNewBug = calcTempAmplitudeNewBug([3, 5, 1], [9, 4, 5]);

console.log(amplitudeNewBug);



//  Challenge 4


const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 4];

function printForecast(tempature){
   const tempStr = tempature.map(num => {
    return String(num);
   });
   console.log(tempStr)
};

printForecast(temps1);

//  method 2
const testArr = [10, 20, 30];

function fakeTest(arr){
    const fakeRes = arr.toString()
    console.log(fakeRes)
    const backTwoArr = fakeRes.split(",")
    console.log(backTwoArr);
}

fakeTest(testArr);

// challegne 4
const data1 = [17, 21, 23];
const dta2 = [12, 5, -5, 4];

console.log(`...${data1[0]}c...${data1[1]}c....${data1[2]} `);

const printTemps = function(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}°c in ${i + 1} days ...`
    }
    console.log('...' + str);
}

printTemps(data1)
*/