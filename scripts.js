const randomNum = Math.round(Math.random() * 100);
let history = [];
let guessRemaining = 3;

function guess() {
    const userNum = document.getElementById("guessNumber").value;
    let resultMessage = '';
    if (userNum) {
        history.find(elm => elm === userNum);
        alert("Duplicate number");
        history.push(userNum);
        if (guessRemaining > 0) {
            if (randomNum > userNum) {
                resultMessage = "Too low";
            } else if (randomNum < userNum) {
                resultMessage = "Too high";
            } else {
                resultMessage = "Correct";
            }
            guessRemaining--;
        } else if (guessRemaining == 0) {
            alert("Out of turn");
            document.getElementById("btnGuess").disable = true;
        }
    }
    document.getElementById("resultArea").innerHTML = `${resultMessage}`;
    document.getElementById("historyArea").innerHTML = `History: ${history}`;
    document.getElementById("guessRemainingArea").innerHTML = ` ${guessRemaining}`;
}

let time = 0 // time start from 0
let myTime; // timer will be assign to this variable

function timecounting() {
    myTime = setInterval(() => {
            time += 1
            document.getElementById('timeCount').innerHTML = time
        }, 1000) // every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}
timecounting() // fire the timecounting function!!

function timeOut() {
    clearInterval(myTime);
}