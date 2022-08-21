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
