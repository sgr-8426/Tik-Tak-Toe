var winX = 0; //count of total score of 0
var win0 = 0;//count of total score of X
var p = document.getElementsByClassName("play"); //places to put 0 or X
var turn = true; //specifies whether the turn is of X or 0, if true then turn is of 0
var playable=true; // to check whethe the situation in match is playable onwards or not 

// function to put 0 or X 
function play(no) {
    if (p[no].innerHTML == "" && playable) {
        if (turn) {
            p[no].innerHTML = "0";
            turn = !turn;  //set the turn to opposite
            wincheck();
        } else {
            p[no].innerHTML = "X";
            turn = !turn; //set the turn to opposite
            wincheck();
        }
    }
    setturn();
}

// to reset the match
function reset() {
    document.getElementById("result").innerHTML="";
    for (var i = 0; i < 9; i++) {
        p[i].innerHTML = "";
    }
    for (var i = 0; i < 8; i++) {
        document.getElementsByClassName("winline")[i].style.display="none";
    }
    playable=true;
    settotalscore(); 
    setturn();
}

// to check if the match is won by anyone
function wincheck() {
    if (p[0].innerHTML == "0" && p[1].innerHTML == "0" && p[2].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        turn = true;
        document.getElementById("abc").style.display="block";
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[3].innerHTML == "0" && p[4].innerHTML == "0" && p[5].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        document.getElementById("def").style.display="block";
        turn = true;
        playable=false;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[6].innerHTML == "0" && p[7].innerHTML == "0" && p[8].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        document.getElementById("ghi").style.display="block";
        turn = true;
        playable=false;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[0].innerHTML == "0" && p[3].innerHTML == "0" && p[6].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        document.getElementById("adg").style.display="block";
        turn = true;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[1].innerHTML == "0" && p[4].innerHTML == "0" && p[7].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        document.getElementById("beh").style.display="block";
        turn = true;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[2].innerHTML == "0" && p[5].innerHTML == "0" && p[8].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        document.getElementById("cfi").style.display="block";
        turn = true;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[0].innerHTML == "0" && p[4].innerHTML == "0" && p[8].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        turn = true;
        document.getElementById("aei").style.display="block";
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[2].innerHTML == "0" && p[4].innerHTML == "0" && p[6].innerHTML == "0") {
        document.getElementById("result").innerHTML = "0<br>Wins";
        win0++;
        playable=false;
        document.getElementById("ceg").style.display="block";
        turn = true;
        document.getElementById("history").innerHTML = "0 wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[0].innerHTML == "X" && p[1].innerHTML == "X" && p[2].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("abc").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[3].innerHTML == "X" && p[4].innerHTML == "X" && p[5].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("def").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[6].innerHTML == "X" && p[7].innerHTML == "X" && p[8].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("ghi").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
        return false;
    }
    if (p[0].innerHTML == "X" && p[3].innerHTML == "X" && p[6].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("adg").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[1].innerHTML == "X" && p[4].innerHTML == "X" && p[7].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("beh").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[2].innerHTML == "X" && p[5].innerHTML == "X" && p[8].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("cfi").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[0].innerHTML == "X" && p[4].innerHTML == "X" && p[8].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("aei").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    if (p[2].innerHTML == "X" && p[4].innerHTML == "X" && p[6].innerHTML == "X") {
        document.getElementById("result").innerHTML = "X<br>Wins";
        winX++;
        playable=false;
        document.getElementById("ceg").style.display="block";
        turn = false;
        document.getElementById("history").innerHTML = "X wins<br>"+document.getElementById("history").innerHTML;
    }
    setturn();
}

// to display the turn is of X or 0
function setturn(){
    if (turn) {
        document.getElementById("turn").innerHTML = "Turn: 0";
    }else{
        document.getElementById("turn").innerHTML = "Turn: X";
    }
}


//sets the total score of 0 and X in right side panel
function settotalscore(){
    document.getElementById("win0").innerHTML = "0: "+win0;
    document.getElementById("winx").innerHTML = "X: "+winX;
}

// reset the total score and history of right side panel
function resetscore(){
    winX=0;
    win0=0;
    document.getElementById("history").innerHTML ="";
    settotalscore();
}