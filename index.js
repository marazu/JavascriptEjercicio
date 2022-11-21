let numberRandom = calculateNumSecret();

console.log(numberRandom);


function numRandomInt(min, max) {
  const numRandom = Math.floor(Math.random() * (max - min + 1)) +            min;
  return numRandom;
}

function calculateNumSecret(){
  let randomNum = numRandomInt(1, 100);
    console.log(randomNum);
  let num = prompt("Please, enter a number, you have 3 chances.");
  

  intentos =0;
   while(num != randomNum && intentos < 2) {
     intentos ++;
    alert("Sorry, try again !");
    
    if (randomNum < num ){
      alert ("The secret number is less");
      num = prompt("Enter the correct number");
    }
    else if (randomNum > num ){
      alert ("The secret number is higher ");
      num = prompt("Enter the correct number");
    }  
     }

  
  if (intentos == 2){
    alert("Sorry, game over :(");
  }
  else {alert ("we have a winner!");
       }
  }
    










