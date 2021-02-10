// rock paper scissors played against the computer

let answer;
let results;
let playerScore = 0;
let compScore = 0;
let gameOver;

function computerPlay () {
      // randomly return rock, paper, or scissors;
      let x = Math.floor(Math.random() * 3)
              switch(x) {
                    case 0:
                          answer= ("rock");
                          break;
                    case 1:
                          answer= ("scissors");
                          break;
                    case 2:
                          answer= ("paper");
                  break;
          }
              return answer;
  }
  
function singleRound () {// return String to declare winner
    // let Question = prompt("rock,paper,scissors"); //grabs user input
    // let playerSelection = Question.toLowerCase(); //makes user input case insensitive
    let compMove = computerPlay();
      //needs to call compMove and playerSelection so each game pulls new data.
      if ((playerSelection == "rock") && (compMove == "rock") || 
        (playerSelection =="scissors") && (compMove =="scissors") || 
        (playerSelection =="paper") && (compMove =="paper")) {
            results = ("tie");
        } else if ((playerSelection == "rock") && (compMove =="paper")) {
            compScore++;
            results = ("you lose. paper beats rock");
        } else if ((playerSelection == "paper") && (compMove =="rock")) {
            playerScore++;
            results = ("you win. paper beats rock");
        } else if ((playerSelection == "scissors") && (compMove =="paper")) {
            playerScore++;
            results = ("you win. scissors beats paper");
        } else if ((playerSelection == "paper") && (compMove =="scissors")) {
            compScore++;
            results = ("you lose. scissors beats paper");
        } else if ((playerSelection == "rock") && (compMove =="scissors")) {
            playerScore++;
            results = ("you win. rock beats scissors");
        } else if ((playerSelection == "scissors") && (compMove =="rock")) {
            compScore++;
            results = ("you lose. rock beats scissors");
        } else {
            results = "typo?"
        }
          return results;
  }

function game() {
      while ((playerScore <5) && (compScore < 5)) {
            singleRound(); 
            console.log(results);
      }
            if (playerScore == 5) {
                  gameOver = "congratulations, You win!!";
            } else {
                  gameOver = "Too bad. You lose";
            }
      return (`${gameOver}, player score is ${playerScore} and computer score is ${compScore}`);
}
      
      //play singleRound 5 times while tallying score from player and computer
      // playerscore ++  and compscore++ in computerPlay else if 
      //play loop until one score = 5 and then declare winner and exit loop
