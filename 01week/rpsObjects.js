// Rock, Paper and Scissors
// a crashdaddy joint
// using javascript with console output
// @AustinCodingAcademy (c)2020

//
// This array holds the possible plays and outcomes
//
const readline = require('readline');

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });

var choices = [{ 
        "choice": "rock", 
        "beats": "scissors", 
        "losesTo": "paper" 
        },{
        "choice": "paper",
        "beats": "rock",
        "losesTo": "scissors"
        },{
        "choice": "scissors",
        "beats": "paper",
        "losesTo": "rock"        
        }];
  
//
// Allow two live users to play or just one lonely jerk playing
// with a computer
//
var gameMode; // = rl.question("Play against (c)omputer or (u)ser? (Defaults to computer)");
function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}
// Possible computer plays
var possibilities = ["rock","paper","scissors"];

//setup counters for ties, wins and lossed
var losses=0;
var ties = 0;
var wins = 0;
var playerChoice; 

rl.question('Play against (c)omputer or (u)ser? (Defaults to computer)', (answer) => {
        // TODO: Log the answer in a database
        gameMode = answer;
      l.question("Player1: rock, paper or scissors? 'q'  to quit",(answer)=> {
  playerChoice=answer;
  //rl.close;
  do {      
        //
        // Player inputs their play
        //
        //
        // Computer gets a turn
        //
        
        
        
        //if (gameMode ==='u') {player2Choice = rl.question("Player 2 enter your choice: "); } else 
        player2Choice = possibilities[getRandomInt(3)];
        //
        // find the play in the 'choices' array above for the current game dynamic
        //
        for (var gameTurn in choices) {
                //
                // only respond to valid input
                //
                if(playerChoice===choices[gameTurn].choice) {
                //
                // Show what the computer chose
                //
                console.log("Player 2 chose: " + player2Choice);
        
                // check the gameTurn dynamic to see who won and output the results
                if(player2Choice===choices[gameTurn].losesTo) {
                    losses++;
                    console.log("You lose, bruh");
                        } 
                else if(playerChoice===choices[gameTurn].choice && player2Choice===choices[gameTurn].beats) {
                        wins++;
                        console.log("You win!");
                } else {
                      ties++;
                      console.log("Tie game");
                }
                } 
            };
        //
        // Start over
        //
        } while (playerChoice!="q");
        //
        // We're done here
        //
        console.log("Game Over");
        console.log("You won " + wins + " times.");
        console.log("You lost " + losses + " times.");
        console.log("You tied " + ties + " times.")
});
        rl.close();
      });

// This function will generate the computer's turn by returning a random number (0..2)
// and choosing from an array of possibilites


//
// This loop allows play to continue until the user enters 'q' for "quit"
