'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
},

// starterIndex, main and time have defaults added to params, incase there is none int he function call. It returns the default value
  orderDelivery: function({
    starterIndex = 1, 
    mainIndex = 0, 
    time = '20:00', 
    address,
  }){
    console.log(`Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} and will be delivered to ${address} at ${time} `);
},

  orderPasta: function (ing1, ing2, ing3){
    console.log(`Here is yoour pasta order with ${ing1}, ${ing2}, and ${ing3}`);
  },
  orderPizza: function(mainIngredient, ...otherIngredients){
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// ========================================================
// LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Capri',
  owner: 'Gio Rossi',
};

// OR assignments operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//  Nullish assignment operator ( null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// && resturn first falsy value
// rest2.owner = rest2.owner && '<ANNONYMOUS>';
// rest1.owner = rest1.owner && '<ANNONYMOUS>';
// similar as above with Logical operator
rest1.owner &&= '<ANNONYMOUS>'
rest2.owner &&= '<ANNONYMOUS>'

console.log(rest1);
console.log(rest2);


// ===============================================
//  short circuting method
//  restaurant.numGuests = 0;

//  similar to terany but  shorter
const guests = restaurant.numGuests  || 10;
console.log(guests);

//  Nullish Coalesing Operator method
//  Nullish values are null or undefined, not 0 or ''
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

/*
==============================================================
//  ShortCut && and ||

//  Can use any data type, return any data type, short circuting 
console.log(3 || 'Travis'); 
console.log('' || 'Travis'); 
console.log(true || 'Travis'); 
console.log(undefined || null); 
console.log(undefined || 0 || '' || 'Hello' || 23);
// below both are false, nothing will be logged in the console
console.log(undefined || "" || 0 ); 
console.log(undefined || "" || 0 || 'Hello'); 

// restaurant.numGuests not defined yet, will be 10
// restaurant.numGuests = 77;
// terany operation
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);
 restaurant.numGuests = 22;
//  similar to terany but  shorter
const guests2 = restaurant.numGuests  || 10;
console.log(guests2);

console.log('----- AND  ------');
console.log(0 && 'Travis');
console.log(7 && 'Travis');

console.log("hello" && 23 && null && 'travis');


if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach')
};
restaurant.orderPizza && restaurant.orderPizza('cheese', 'bacon');
=================================================================
*/


// =============================================
// // REST PATTERN AND PARAMETERS
// // Destructuring
// //  Spread , because on Right side  of =
// const arr = [1, 2, ...[3,4]];

// //  REST , bec on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// // takes all elements of menu array and put into new arr
//  const [pizza, ,rizotto, ...otherfood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
//  console.log(pizza, rizotto, otherfood);

//  //  REST for Objects
// //  to only get weekdays, make two obj. but only use the weekdays
//  const {sat, ...weekDays} = restaurant.openingHours;
//  console.log(weekDays);

// //   Functions with Rest Parameter
// const add = function(...numbers) {
//   console.log(numbers);
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2,3 );
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 8, 9, 13);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('basil', 'onion', 'olives', 'bacon');
// restaurant.orderPizza('cheese');



//  Spread Operator

// const arr = [7, 8, 9];
// // adding to array
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // Adds the arr into otherArr, but new arr is internally seperate
// const otherArr = [5, arr];
// console.log(otherArr);
// //  Addding with SPREAD OPERATOR, merges the arrays into 1 var
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// //  Create new menu, adding old and new item
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //  Making shallow copy array and merge
// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy);
// //  Join the array above
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //  Iterables: arrays, strings, maps and sets. NOT Objects
// const str = 'Travis'
// const lettres = [...str,' ','M', 'T' ];
// console.log(lettres);
// console.log(...str);

// const ingredients = [
//   // prompt("Let's make pasta! ingriendent 1 ?"),
//   // prompt('ingriendent  2'),
//   // prompt('ingriendent  3')
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1],ingredients[2]);

// restaurant.orderPasta(...ingredients);

// //  Objests
// const newRestaurant = {foundedYear: '1998', ...restaurant, founder: "Romeo"};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Riotorante';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);



// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Vila del Sol 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Vila del Sol 21',
//   starterIndex: 2,
// });

// //  Destructuring Objects
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);
// //  Destructuring Objects while assigning new variable name from OBj's proptery names
// const {name: restaurantName, openingHours: hours, categories: tags } = restaurant;
// console.log(restaurantName, hours, tags);

// // Defaut Values
// const {menu = [], starterMenu: starters = []} = restaurant;console.log(menu, starters);

// // Mutating Variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14 };
// ({a ,b} = obj);
// console.log(a, b);

// //  Nested Obj Destructuring , and assigning new variable names
// const  {fri: {open: o, close: c} } = openingHours;
// // console.log(fri);
// console.log(o, c);



// //  Destucturing Arrays
//   const arr =[2,3,4];
//   const a = arr[0]
//   const b = arr[1]
//   const c = arr[2]

//   // destructeured assignment
//   const [x, y, z] = arr; 
//   console.log(x,y,z);
//   console.log(arr);

//   //  ,  , make a whole to skip a number of the array
//   const [first, ,second] = restaurant.categories
//   console.log(first, second);

//   let [main, ,secondary] = restaurant.categories
//   console.log(main, secondary);


//   //  SWITICHING VARIABLES
//   // const temp = main;
//   // main = secondary;
//   // secondary = temp;
//   // console.log(main, secondary);

//  [main, secondary] = [secondary, main];
//  console.log(main, secondary);


// //  Recieve 2 Return Values from a Function
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] =  restaurant.order(2, 0)   
// console.log(starter, mainCourse);
  
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i ,j);
// //  Nested destructuring
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //  Derfult Values 
//  const [p = 1, q = 1, r = 1] = [8, 9] 

// console.log(p, q, r);

//   //  switch categories

  
  

