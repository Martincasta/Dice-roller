//--Bonus--//
var bonus = document.querySelector("#bonus");

var bonusValue = bonus.value;

//--Amount of Die--//
var amount = document.querySelector("#amount");

var amountValue = amount.value;

//--Type of Die--//

var diceType = document.getElementById("dieType");

var total = [];

function anySides(){

    var everySum = document.getElementById("Sum");
    var everyResult = document.getElementById("Result");
    //-- This is where the math is saved up, the amount of sides is decided by the user--//
    var anySides = (Math.floor(Math.random()*(diceType.value)+1));

    var total = [];
    //-- This is where the die are rolled, always using the amount-1 for the math cause if it's 2 that's one die plus one die--//
   for(var i = 1; i <= Number(amount.value); ++i){
        
    var firstDie = (Math.floor(Math.random()*(diceType.value)+1));

    total.push(firstDie);

    console.log(total  + "+" + i);}


    //-var severalDie = anySides + (Math.floor(Math.random()*(diceType.value)+1))*Number(amount.value-1);--//
    //--If there's a bonus, it gets added here--//
    var totalRoll = Number(total.reduce((a, b) => a + b, 0) + Number(bonus.value));
    
    everySum.innerHTML ="Your roll was: " + amount.value + "d"+diceType.value+"("+total+") + "  + bonus.value + " = " ;
    everyResult.innerHTML = totalRoll;


  
}




/*function rollDie(){

switch(Number(diceType.value)){


    //--- D20 ---//
case 20:

        var d20Result = document.getElementById("Result");
        
        var d20 = (Math.floor(Math.random()*20+1)) + Number((amount.value-1)*((Math.floor(Math.random()*20+1))));
    
        var sum = d20 + Number(bonus.value);
    
        d20Result.innerHTML = "Your d20 roll was: " + amount.value + "d20("+d20+") + "  + bonus.value + " = " + sum;

        console.log(sum);

    break;

    
    //--- D12 ---//
case 12:
    var d12Result = document.getElementById("Result");
    var d12 = Math.floor(Math.random()*12+1) + Number((amount.value-1)*((Math.floor(Math.random()*12+1))));
    var sum = d12 + Number(bonus.value);
      
    d12Result.innerHTML = "Your d12 roll was: "  + amount.value + "d12 + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    //--- D10 ---//
case 10:
    var d10Result = document.getElementById("Result");
    var d10 = Math.floor(Math.random()*10+1 + Number((amount.value-1)*((Math.floor(Math.random()*10+1)))));
    var sum = d10 + Number(bonus.value)
      
    d10Result.innerHTML = "Your d10 roll was: "  + amount.value + "d10 + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    //--- D8 ---//
case 8:
    var d8Result = document.getElementById("Result");
    var d8 = Math.floor(Math.random()*8+1 + Number((amount.value-1)*((Math.floor(Math.random()*8+1)))));
    var sum = d8 + Number(bonus.value)
      
    d8Result.innerHTML = "Your d8 roll was: "  + amount.value + "d8 + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    
    //--- D6 ---//
case 6:
    var d6Result = document.getElementById("Result");
    var d6 = Math.floor(Math.random()*6+1 + Number((amount.value-1)*((Math.floor(Math.random()*6+1)))));
    var sum = d6 + Number(bonus.value)
      
    d6Result.innerHTML = "Your d6 roll was: "  + amount.value + "d6 + " + bonus.value + " = " + sum;

    console.log(sum);

    break;
    
    //--- D4 ---//
case 4:
    var d4Result = document.getElementById("Result");
    var d4 = Math.floor(Math.random()*4+1 + Number((amount.value-1)*((Math.floor(Math.random()*4+1)))));
    var sum = d4 + Number(bonus.value)
      
    d4Result.innerHTML = "Your d4 roll was: "  + amount.value + "d4 + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

default:
    var defaultResult = document.getElementById("Result");

    defaultResult.innerHTML = "Please choose a die number from the set (d20,d12,d10,d8,d6,d4)"

}

};
*/





