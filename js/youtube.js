// functions and objects
{
    let position = {
        x: 10,
        y: 20,
        print: function(){
            console.log( `x: ${this.x}, y: ${this.y}`);
        }
         
    }

    let myPosition = position;
    
    console.log(position);
    console.log(myPosition);

    myPosition.x = 15;

    console.log(position);
    console.log(myPosition);
    position.print();
}
