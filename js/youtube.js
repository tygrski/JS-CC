// if statements
// {

//     var name = prompt();
//     if(name === "travis"){  // identity operator // strict eqiality
//         console.log("welcome");
//      }else if (name === "tom"){
//         console.log("hi tom")
//      }
//      else{
//         console.log("you are not welcome")
//      }
// }

// compare operators
// {

//     var age = prompt();
//     if(age < 12){  // identity operator // strict eqiality
//         console.log("welcome");
//      }

// }

// logical operators
// {

//     var age = prompt();
//     if(age < 13 || age >= 65 ){
//         console.log("welcome");
//      }

// }

// {

//     var age = prompt('AGE');
//     var name = prompt('Name');

//     if(age < 12 && name === "travis" ){
//         console.log("welcome");
//      }

// }

//  swith statement
// {
//     let name =prompt("what is your name");

//     switch(name)
//     {
//         case "travis":
//             console.log('welcome');
//             break;
//         case "Tom":
//             console.log("bye");
//             break;
//         default:
//             console.log("you can enter");
//             break;
//     }
// }

// single line if statement
// {
// let name = prompt("what is your name?");
// if(name === "travis") console.log("hi")

// console.log("this will print each time beacuse above is attached to if not this");
// }

// ================
// ternary operator

// {
//     let name = prompt("what is my name?");
//     let points = name === "travis" ? 10 : 0;
//     console.log(points);
// }

// {
//     let name = prompt("what is my name?");
//     name === "travis" ? console.log(10) : console.log(0);
//     ;
// }

// into to loops

//  while loop
// {
//   let i = 1;
//   while (i < 11) {
//     console.log(i);
//     i++;
//   }
// }

// ===========
// do while
// {
//     let i = 0;
//     do{
//         console.log(i);
//         i++
//     } while( i < 12);
// }
// =================
// for  loop
// {
// for ( i = 0; i < 20; i++) {
//  console.log(i);
// }
// }

// {
//     let password;
//     do{
//         password = prompt("what is the password?");
//     }while(password.toLocaleLowerCase() !== "let me in");
// }

// for loop
// {

//     let list = [1,2,3,4,5,6,8,9]
// for ( let i = 0; i <  list.length ; i++ ){
//     console.log(list[i]);
// }
// }

// ============================
// same as above with search and continue
// {
//   let myString = "search this string baby";
//   let charToSearch = "c";
//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === charToSearch) {
//       console.log(myString[i] + "is found at index of " + i );
//     }
//   }
// }

// ============
// same as above with search and continue
// {
//     let myString = "search this string baby cc and c";
//     let charToSearch = "c";
//     for (let i = 0; i < myString.length; i++) {
//       if (myString[i] === charToSearch) {
//         console.log(myString[i] + " is found at index of " + i );
//         break;
//       }
//     }
//   }

//========== with continue
// filtering out the vowels in myString
// {
//   let myString = "search this string baby cc and ccc";
//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === "a" ||  myString[i] === 'e' || myString[i] === 'i'){
//       continue;
//     }
//     console.log(myString[i]);
//   }
// }

// ===========================================
// nested loops
{
    let d = document.getElementById("destination");
  for (let i = 0; i < 10; i++) {
    for( let k = i; k >= 0; k--){
        d.append(k + " ");
    }
    var br = document.createElement('br');
    d.appendChild(br);
  }
}
