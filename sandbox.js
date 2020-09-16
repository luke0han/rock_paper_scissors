//  *****Rock Paper Scissors*****

//  Get users choice
let userChoice = prompt(('Choose rock, paper or scissors: ')).toLowerCase();
if(userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'){
    console.log(`Your choice: ${userChoice}`);
} else{
    console.log('Not a valid selection');
}

//  Computers choice
function compChoice1(){
    switch(Math.floor(Math.random()*3)){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    };
}

let compChoice = compChoice1();

console.log("Computer's choice: " + compChoice);

// Determine winner
function getWinner(){
    if(userChoice === compChoice){
       return "It's a tie!";
    } else if (userChoice === 'rock'){
        if(compChoice === 'paper'){
        return 'You Loose!';
        } else {
            return 'You Win!'; //1 me rock comp sciss(correct)| 2 me r comp r (incorrect)
        }
    } else if(userChoice === 'paper'){
        if(compChoice === 'scissors'){
            return 'You Loose!';
        } else {
            return 'You Win!'; //mp cr 
        }
    } else if(userChoice === 'scissors'){
        if(compChoice === 'rock'){
            return 'You Loose!';
        } else {
            return 'You Win!';
        }
    }
};

console.log(getWinner());