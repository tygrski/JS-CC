(function(){
//  IFFE - immediately invoked funciton expression
var age = 5;



})();

{
    // block
    let y = 10;
    let x = 15;
    {
        let y = 6;
        console.log(y);
    }
    console.log(y);
    console.log(x,y);
    var z = 100;
}