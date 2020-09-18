// SCOREBOARD
const score = {
    player: 0,
    computer: 0,
}

const gameTheory = {
    rock: {
        beats:'scissors',
        loses: 'paper',
        ascii: '',
    },
    paper: {
        beats:'rock',
        loses: 'scissors',
        ascii: '',
    },
    scissors: {
        beats:'paper',
        loses: 'rock',
        ascii: '',
    }
}

// COMPUTER LOGIC
function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];

    // Randomly return one of the values in the options array. 
    return options[
        Math.floor(Math.random() * options.length)
    ]; 
}

// PLAYER SELECTION
function promptPlayer(round) {
    let selection = prompt(`Round ${round} of 5 \n Please type either Rock, Paper, or Scissors`)
        .trim().toLowerCase();

    return selection
}

// GAME MECHANICS
function playRound(playerSelection, computerSelection) {
    let results = ""

    if (playerSelection === computerSelection){
        results = 'tied';
    } else {
        results = gameTheory[playerSelection].beats === computerSelection ?
            'player' : 
            'computer';
    }

    return results;
}

// FINAL WINNER
function calcWinner(score){
    let winner = "";

    if (score.player == score.computer){
        winner = "No One!";
    } else if (score.player > score.computer){
        winner = "player"
    } else winner = "computer";
    
    return winner;
}

function game() {
    for (let round = 1; round <= 5; round++) {
        const playerSelection = promptPlayer(round);
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        
        console.log(`---- Round ${round} ----`)
        console.log(`You play ${playerSelection} and Computer plays ${computerSelection}`);

        if (result === 'tied'){
            console.log('Tied Round!')
        } else if (result === 'player') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}.`)
            score.player++;
        } else if (result === 'computer'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
            score.computer++;
        }
    }
    
    console.log('---- Final Results ----');
    console.log(`The winner is: ${calcWinner(score)}`);
}

game();