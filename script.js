var winX = 0; // Count of total wins for X
var win0 = 0; // Count of total wins for 0
var p = document.getElementsByClassName("play"); // Places to put 0 or X
var turn = true; // True means turn of '0', false means turn of 'X'
var playable = true; // Indicates if the match is still playable

// Function to handle a player's move
function play(no) {
    if (p[no].innerHTML == "" && playable) {
        p[no].innerHTML = turn ? "0" : "X";
        wincheck();
        turn = !turn; // Switch turns
        setturn();
    }
}

// Function to reset the board
function reset() {
    document.getElementById("result").innerHTML = "";
    for (var i = 0; i < 9; i++) p[i].innerHTML = "";
    for (var i = 0; i < 8; i++) document.getElementsByClassName("winline")[i].style.display = "none";
    playable = true;
    turn = true; // Reset turn to '0'
    settotalscore();
    setturn();
}

// Function to check win conditions
function wincheck() {
    var winningPatterns = [
        [0, 1, 2, "abc"], [3, 4, 5, "def"], [6, 7, 8, "ghi"], // Rows
        [0, 3, 6, "adg"], [1, 4, 7, "beh"], [2, 5, 8, "cfi"], // Columns
        [0, 4, 8, "aei"], [2, 4, 6, "ceg"]  // Diagonals
    ];

    for (var i = 0; i < winningPatterns.length; i++) {
        var [a, b, c, line] = winningPatterns[i];
        if (p[a].innerHTML !== "" && p[a].innerHTML === p[b].innerHTML && p[b].innerHTML === p[c].innerHTML) {
            document.getElementById("result").innerHTML = p[a].innerHTML + "<br>Wins";
            document.getElementById(line).style.display = "block";
            playable = false;
            
            if (p[a].innerHTML === "0") win0++;
            else winX++;

            document.getElementById("history").innerHTML = p[a].innerHTML + " wins<br>" + document.getElementById("history").innerHTML;
            settotalscore();
            return;
        }
    }

    // Check for a draw (if all cells are filled and no winner)
    if ([...p].every(cell => cell.innerHTML !== "")) {
        document.getElementById("result").innerHTML = "Draw!";
        document.getElementById("history").innerHTML = "Draw<br>" + document.getElementById("history").innerHTML;
        playable = false;
    }
}

// Function to update turn display
function setturn() {
    document.getElementById("turn").innerHTML = "Turn: " + (turn ? "0" : "X");
}

// Function to update total scores
function settotalscore() {
    document.getElementById("win0").innerHTML = "0: " + win0;
    document.getElementById("winx").innerHTML = "X: " + winX;
}

// Function to reset total scores and history
function resetscore() {
    winX = 0;
    win0 = 0;
    document.getElementById("history").innerHTML = "";
    settotalscore();
}