var userSymbol;
var compSymbol;
let xRadio;

var boardState = [false, false, false, false, false, false, false, false, false];

var btnTopLeft = document.getElementById("top-left");
var btnTopMiddle = document.getElementById("top-middle");
var btnTopRight = document.getElementById("top-right");
var btnMiddleLeft = document.getElementById("middle-left");
var btnCentre = document.getElementById("centre");
var btnMiddleRight = document.getElementById("middle-right");
var btnBottomLeft = document.getElementById("bottom-left");
var btnBottomMiddle = document.getElementById("bottom-middle");
var btnBottomRight = document.getElementById("bottom-right");

function getSymbols(){
    xRadio = document.getElementById("X");
    
    if (xRadio.checked){
        userSymbol = "X";
        compSymbol = "O";
    }

    else {
        userSymbol = "O";
        compSymbol = "X";
    }

}


btnTopLeft.addEventListener("click", function markBox(){
    btnTopLeft.innerHTML = userSymbol;
    boardState[0] = True;
});

btnTopMiddle.addEventListener("click", function markBox(){
    btnTopMiddle.innerHTML = userSymbol;
    boardState[1] = True;
});

btnTopRight.addEventListener("click", function markBox(){
    btnTopRight.innerHTML = userSymbol;
    boardState[2] = True;
});

btnMiddleLeft.addEventListener("click", function markBox(){
    btnMiddleLeft.innerHTML = userSymbol;
    boardState[3] = True;
});

btnCentre.addEventListener("click", function markBox(){
    btnCentre.innerHTML = userSymbol;
    boardState[4] = True;
});

btnMiddleRight.addEventListener("click", function markBox(){
    btnMiddleRight.innerHTML = userSymbol;
    boardState[5] = True;
});

btnBottomLeft.addEventListener("click", function markBox(){
    btnBottomLeft.innerHTML = userSymbol;
    boardState[6] = True;
});

btnBottomMiddle.addEventListener("click", function markBox(){
    btnBottomMiddle.innerHTML = userSymbol;
    boardState[7] = True;
});

btnBottomRight.addEventListener("click", function markBox(){
    btnBottomRight.innerHTML = userSymbol;
    boardState[8] = True;
});

function computerTurn(){
    var randomNum = Math.floor(Math.random(0,9))

    if (randomNum == 1){
        btnTopLeft.innerHTML = compSymbol;
    }
}

