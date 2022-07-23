//--Bonus--//
var bonus = document.querySelector("#bonus");

//--Amount of Die--//
var amount = document.querySelector("#amount");

//--Type of Die--//

var diceType = document.getElementById("dieType");



function rollDie(){


switch(Number(diceType.value)){


    //--- D20 ---//
case 20:

    var d20Result = document.getElementById("Result");
    
    var d20 = (Math.floor(Math.random()*20+1)) * amount.value ;
    
    var sum = d20 + Number(bonus.value);
    
    d20Result.innerHTML = "Your d20 roll was: " + amount.value + "d20 + "  + bonus.value + " = " + sum;

    console.log(sum);

    break;

    
    //--- D12 ---//
case 12:
    var d12Result = document.getElementById("Result");
    var d12 = Math.floor(Math.random()*12+1);
    var sum = d12 + Number(bonus.value)
      
    d12Result.innerHTML = "Your d12 roll was: " + d12 +" + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    //--- D10 ---//
case 10:
    var d10Result = document.getElementById("Result");
    var d10 = Math.floor(Math.random()*10+1);
    var sum = d10 + Number(bonus.value)
      
    d10Result.innerHTML = "Your d10 roll was: " + d10 +" + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    //--- D8 ---//
case 8:
    var d8Result = document.getElementById("Result");
    var d8 = Math.floor(Math.random()*8+1);
    var sum = d8 + Number(bonus.value)
      
    d8Result.innerHTML = "Your d8 roll was: " + d8 +" + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

    
    //--- D6 ---//
case 6:
    var d6Result = document.getElementById("Result");
    var d6 = Math.floor(Math.random()*6+1);
    var sum = d6 + Number(bonus.value)
      
    d6Result.innerHTML = "Your d6 roll was: " + d6 +" + " + bonus.value + " = " + sum;

    console.log(sum);

    break;
    
    //--- D4 ---//
case 4:
    var d4Result = document.getElementById("Result");
    var d4 = Math.floor(Math.random()*4+1);
    var sum = d4 + Number(bonus.value)
      
    d4Result.innerHTML = "Your d4 roll was: " + d4 +" + " + bonus.value + " = " + sum;

    console.log(sum);

    break;

default:
    var defaultResult = document.getElementById("Result");

    defaultResult.innerHTML = "Please choose a die number from d20 to d4"

}

};






