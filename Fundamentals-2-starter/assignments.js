'use strict';
/*
const country = 'India';
const continent = 'Asia';
let indiaPop = 1000000000;

console.log(country, continent, indiaPop);

var isIsland = false;
let language = 'English';
console.log(typeof isIsland, typeof indiaPop, typeof country, typeof language);

console.log(`India is split one half, it will have  ${indiaPop / 2} people`);

console.log(indiaPop + 1);

const finlandPop = 6000000;
if (finlandPop > indiaPop) {
  console.log('fin is bigger');
} else if (indiaPop > finlandPop) {
  console.log('india is bigger');
} else {
  console.log('no pop givern');
}
const avgPop = 33000000;

if (indiaPop > avgPop) {
  console.log('india is bigger than avgPop');
} else if (avgPop > indiaPop) {
  console.log('AVG IS BIGGER than india');
}

const description = `portugal is in Euro, and has 11 million people that speak portugese`;
console.log(description);

const portPop = 11000000;

if (avgPop > indiaPop) {
  console.log(`india population is below average`);
} else if (indiaPop > avgPop) {
  console.log(`India's population is above average`);
}

//  str - str = num
// num - str = num
// str - num = num
//  num + str = str
//  str + str = str
// str + num = str



console.log('9' - '8');
console.log(9 - '5');
console.log('5' - 2);
console.log(9 + '5');
console.log('11' + 3);
console.log('9' + '5');
console.log('19' - '13' + '17');
console.log('19' - '17' + 17);
console.log('58' < 57);
console.log(3 + 7 + '6' + 1);
console.log(3 + 7 + '6' - 1);
console.log(5 + 6 + '4' + 9 - 4 -2 );



let numNeighbors = Number(prompt('How many neighbor countries does your country have ?'));

console.log(numNeighbors);


function askBorder(numNeighbors){
if(numNeighbors === 1){
  console.log('Only 1 border')
} else if(numNeighbors > 1){
  console.log('More than 1 border');
} else {
  console.log('no borders ');
  }
}
askBorder(numNeighbors);

let strLanguage = prompt('what language do you prefer ?');
let numPop = Number(prompt('What is the maximum population you seek ?'));
let numNeighbors = Number(prompt('How many neighbor countries does your country have ?'));


if(strLanguage === 'English' && numPop < 50000000  && numNeighbors > 0 ){
  console.log('You should live in Portugal')
} else {
  console.log('Portugal is not right for you');
}

let strLanguage = prompt('what language do you prefer ?');

switch(strLanguage){
  case 'Chinese':
  case 'Mandrin': 
  console.log('MOST number of native speakers!')
  break;

  case 'Spanish':
  console.log('2nd number is Spanish');
  break;

  case 'Hindi': console.log('Number 4');
  break;
}


let countryName = prompt("What is your country's name ");
let numPop = Number(prompt('What is the population in millions?'));


  console.log(`${countryName}'s pooulation is ${numPop > 33 ? 'above' : 'below'} average at ${numPop} million` );


function describeCountry(counrty, population, capitalCity) {
  console.log(
    `${counrty} has ${population} milllion people and it's capitol is ${capitalCity}`
  );
}

describeCountry('Mexico', 33, 'CDMX');
// describeCountry('Holland', 10, 'Amsterdam');
// describeCountry('Japan', 27, 'Tokyo');

function percentageOfWOrld1(population) {
  let percentage = (population / 7900) * 100;
  console.log(percentage);
}

percentageOfWOrld1(300);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log('usa', percentageOfWorld2(300));
console.log('india', percentageOfWorld2(1000));

// const percentageOfWorld3 = population => (population / 7900) * 100;

// console.log('canada', percentageOfWorld3(40));
// console.log('mexico', percentageOfWorld3(100));

// const  describePopulation = function(counrty, population){
//     const percentage = percentageOfWOrld1(population);
//     const descriptin =(`${counrty} has ${population} million people , which is about ${percentage} of the world`);
//     console.log(descriptin);
// }

// describePopulation('usa', 300);

const describePopulation = function (country, population) {
  // calculate percent of total world polulation
  function percentage (){
    (population / 7900) * 100;
    return percentage;
  };

  percentage(population);
  const description = `${country} has ${population} million 
  people, which is about ${percentage} % of the world.`;
  
  console.log(description);
};

describePopulation('USA', 332);



// function percentageOfWOrld1(population) {
//   let percentage = (population / 7900) * 100;
//   console.log(percentage);
// }

// const populations = [300, 400, 500];
// console.log(populations.length === 3);

//  const percentages = [
//  percentageOfWorld1(populations[0]),
//  percentageOfWorld1(populations[1]),
//  percentageOfWorld1(populations[2]),
//  percentageOfWorld1(populations[3])
//  ];
//  console.log(percentages);


*/


const describePopulation = function (country, population) {
  function percentageOfWOrld1(population) {
    let percentage = (population / 7900) * 100;
    console.log(percentage);
    return percentage;
  }
  percentageOfWOrld1();
  const description = `${country} has ${population} million 
  people, which is about ${percentage}% of the world.`;
  console.log(description);
};

describePopulation('USA', 332);
