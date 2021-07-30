const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Rock(1)   Scissors(2)   Paper(3)? ', (userInput) => {
  
    run(userInput); // 실행하라 라는 함수를 사용하는 부분 

    rl.close();
});


// 실행하라 라는 함수를 정의하는 부분
function run(input) {

    const computerPick = getComputerPick(); // 함수를 사용하는 부분

    console.log("You entered\t\t" + toString(input));
    console.log("Computer entered\t" + toString(computerPick));

    
    const winner = calculateWinner(input, computerPick);

    console.log("Winner is........................... " + winner);
}

// 함수 정의하는 부분: 1~3 사이로 랜덤하게..
function getComputerPick() {
    return Math.floor(getRandomArbitrary(1, 4));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


function toString(someRandomInputValue) {
    if (someRandomInputValue == 1) {
        return "[Rock]";
    }

    if (someRandomInputValue == 2) {
        return "[Scissors]";
    }

    if (someRandomInputValue == 3) {
        return "[Paper]";
    }
}

// user input : 1~3 value
// computer input : 1~3 value
function calculateWinner(userInput, computerInput) {

    const res = userInput - computerInput;
    // res -1 0 +1
    // -2 +2 -> eliminate this


    if (res==0) {
        return "DRAW :("
    }

    if (res == -1 || res == 2) {
        return "USER!!!"
    }

    if (res == 1 || res == -2) {
        return "COMPUTER!!!"
    }
}