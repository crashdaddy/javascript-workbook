// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

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
  },{
    "choice" : "lizard",
    "beats": ["paper","spock"],
    "losesTo": ["rock","scissors"],
    },{
     "choice": "spock",
     "beats" : ["scissors","rock"],
     "losesTo": ["lizard","paper"]        
    }];



  // Possible computer plays
var possibilities = ["rock","paper","scissors","lizard","spock"];

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var playerChoice;
var player2Choice;
var ties=0;
var wins=0;
var losses=0;


// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

   player2Choice=hand2;
   playerChoice=hand1;

    
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
            if(choices[gameTurn].losesTo.includes(player2Choice)) {
                losses++;
                console.log("You lose, bruh");
                    } 
            else if(choices[gameTurn].beats.includes(player2Choice)) {
                    wins++;
                    console.log("You win!");
            } else {
                  ties++;
                  console.log("Tie game");
            }
            } 
        };
   
    //
    console.log("Game Over");
    console.log("You won " + wins + " times.");
    console.log("You lost " + losses + " times.");
    console.log("You tied " + ties + " times.")
  
  }

  // Write code here
  // Use the unit test to see what is expected



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
