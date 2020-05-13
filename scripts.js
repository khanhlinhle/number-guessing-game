// let randomNum = Math.round(Math.random() * 100);
let randomNum = 50;
let history = [];
let resultHistory = [];
let guessRemaining = 5;
let time = 30;
let myTime;
let bestPlay = 5;
let i = 0;
let txt = "You have 5 chances to guess the mystery number within 30 seconds."
let speed = 30;

function guess() {
    const userNum = document.getElementById("guessNumber").value;
    if (userNum) {
        if (guessRemaining > 0) {
            if (history.includes(userNum)) {
                alert("Duplicate number");
            } else {
                history.push(userNum);
                guessRemaining--;
                const value = parseInt(userNum);
                if (randomNum === value) {
                    alert("Bingo !!! You got me");

                    // chi luu nguoi xin nhat
                    if (bestPlay > (5 - guessRemaining)) {
                        bestPlay = 5 - guessRemaining;
                        console.log(bestPlay);
                    }

                    // luu het vao history
                    // dung Math.max lay ra thang xin nhat
                    resultHistory.push(5 - guessRemaining);
                    console.log(Math.max(...resultHistory));

                    resetAll();
                } else if (randomNum > value) {
                    alert("Too small. Catch me if you can");
                } else if (randomNum < value) {
                    alert("Too big. Not even close");
                }
                time = 30;
            }
        } else {
            alert("Better luck next time !");
            document.getElementById("btnGuess").disable = true;
        }
    }

    // document.getElementById("historyArea").innerHTML = `History: ${history}`;
    if (guessRemaining > 0) {
        document.getElementById("guessRemainingArea").innerHTML = `Turn left: ${guessRemaining}`;
    } else {
        document.getElementById("guessRemainingArea").innerHTML = `Better luck next time`;
    }
}


function resetAll() {
    timeOut();
    guessRemaining = 5;
    history = [];
    document.getElementById("guessRemainingArea").innerHTML = `Turn left: ${guessRemaining}`;
    time = 30;
    timecounting();
}

function timecounting() {
    myTime = setInterval(() => {
            time -= 1
            const percent = time / 30 * 100;
            document.getElementById("progress-bar").setAttribute("style", "width:" + percent + "%");
            document.getElementById("progress-bar").setAttribute("aria-valuenow", percent);
            document.getElementById("guessTimeCount").innerHTML = `Time left: ${time}`;
            if (time == 0) {
                timeOut(); // Put the function timeOut to stop counting
                document.getElementById("guessTimeCount").innerHTML = `Sorry bae. You ran out of time`;
            }
        }, 1000) // every 1 second, it will add 1 into time variable (computer use millisecond so 1000 is 1 second)
}

function timeOut() {
    clearInterval(myTime);
}

function startGame() {
    var txt;
    if (confirm("Are you ready ?")) {
        resetAll();
    }
}