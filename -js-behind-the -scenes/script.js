'use strict';
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