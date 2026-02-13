const max=prompt("Enter your max number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess your random number");
while(true){
    if(guess=="quit"){
        console.log("You quit!");
        break;
    }
    if(guess==random){
        console.log("Congratulations! You guessed the correct number which is",random);
    break;
    }
    else if(guess<random){
        guess=prompt("Hint:Your guess was too small,Please try Again.");
    }
     else if(guess>random){
        guess=prompt("Hint:Your guess was too large,Please tr Again.");
    }
    
}