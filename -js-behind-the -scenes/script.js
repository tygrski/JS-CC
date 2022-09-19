'use strict';
/* 
function calcAge(birthYear){
    const age  = 2037 - birthYear;
    
    function printAge(){
        let outPut = `${firstName} are ${age}, born in ${birthYear}`;
        console.log(outPut);

        if(birthYear >= 1981 && birthYear <= 1996){
            var millenal = true;
            const firstName = 'Steven'
            const str = `Oh , you are a millenal, ${firstName}`
            console.log(str);

            function add(a,b){
                return a + b;
            }
            outPut = 'NEW OUTPUT'
            // let outPut = 'Other OUTPUT'
            console.log(add(2,5));
            console.log(outPut);
        }
        // console.log(str);
        console.log(millenal);
        console.log(outPut);
        // add(2,3);  // doesnt work because of strict mode
        // console.log(add(2,5));   // will work if not in strict mode
    }
    printAge();

    return age;
    
}
const firstName ='Travis';
calcAge(1990);



// Hoisting

//  with variables
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Travis';
let job = 'student';
const birthYear = 1980;
console.log(me);

// hoistin with Functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));

//  functions with function keyword are hoisted
 function addDecl(a,b){
    return a + b;
 }

 const addExpr = function(a,b) {
    return a + b;
 }

 const addArrow = (a,b) => a +b;

//  Example

if(!numProducts) deleteShoppingCart();

// code above will run , but value is undefined or !numproducts, so cl will work
var numProducts = 10;

function deleteShoppingCart (){
    console.log(`all products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

// check to see if part of window object
// only var is part of the window object
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

*/

//  THIS keyword
console.log(this);

const calcAge = function (birthyear) {
  console.log(2022 - birthyear);
  console.log(this);
};

calcAge(1980);

const calcAgArrow = birthyear => {
  console.log(2022 - birthyear);
  console.log(this);
};
calcAgArrow(1980);

const Travis = {
  year: 1980,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
};

Travis.calcAge();

const matilda = {
    year: 1984,
}
matilda.calcAge = Travis.calcAge;
matilda.calcAge();

const f = Travis.calcAge;
// THIS will be undefined as on line 99undefined because f is not an object
f();
