var number = 0
var cpc=1
var cps=0
var upgrOneVal=0
var upgrTwoVal=0
var upgrThreeVal=0
var mult=1
function addOne(){
    number += Math.floor(cpc*mult);
    displayNumChange();
    save();
}

function getNumber(){
    number = localStorage.getItem("number");
    displayNumChange();
}

function save(){
    localStorage.setItem("num", number);
    localStorage.setItem("cpc", cpc);
    localStorage.setItem("cps", cps)
    localStorage.setItem("upgrOneVal", upgrOneVal);
    localStorage.setItem("upgrTwoVal", upgrTwoVal);
    localStorage.setItem("upgrThreeVal", upgrThreeVal);
    localStorage.setItem("mult", mult);
}



function load(){
    number = parseInt(localStorage.getItem("num"));
    cpc = parseInt(localStorage.getItem("cpc"));
    upgrOneVal = parseInt(localStorage.getItem("upgrOneVal"));
    upgrTwoVal = parseInt(localStorage.getItem("upgrTwoVal"));
    cps = parseInt(localStorage.getItem("cps"));
    upgrThreeVal = parseInt(localStorage.getItem("upgrThreeVal"));
    displayNumChange();
}

function reset(){
    if (confirm("Are you sure you want to do that?") === true){
        if (confirm("Are you really, truly sure???") === true){
            number = 0;
            cpc = 1;
            upgrOneVal = 0;
            cps = 0;
            upgrTwoVal = 0;
            upgrThreeVal = 0;
            mult = 1;
            save();
            displayNumChange();
        }
    }
}

function buyUpgradeOne(){
    if (number >= 25*(2**upgrOneVal)){
        number-= 25*(2**upgrOneVal);
        cpc+=1;
        upgrOneVal+=1;
    }
    displayNumChange();
    save();
}

function buyUpgradeTwo(){
    if (number >= 200*(2**upgrTwoVal)){
        number-= 200*(2**upgrTwoVal);
        cps+=1;
        upgrTwoVal+=1;
    }
    displayNumChange();
    save();
}

function buyUpgradeThree(){
    if (number >= 1600*(2**upgrThreeVal)){
        number-= 1600*(2**upgrThreeVal);
        mult+=0.25;
        upgrThreeVal+=1;
    }
    displayNumChange();
    save();
}


function displayNumChange(){
    document.getElementById("number").innerHTML = "$" + number;
    document.getElementById("cpc").innerHTML = "Dollars per Click: " + cpc;
    document.getElementById("cps").innerHTML = "Dollars per Second: " + cps;
    document.getElementById("mult").innerHTML = "Multiplier: " + mult + "x";
    document.getElementById("upgradeOne").innerHTML = "Upgrade One: $" + 25*(2**upgrOneVal);
    document.getElementById("upgradeTwo").innerHTML = "Upgrade Two: $" + 200*(2**upgrTwoVal);
    document.getElementById("upgradeThree").innerHTML = "Upgrade Three: $" + 1600*(2**upgrThreeVal);
}


function myTimer() {
    number += Math.floor(cps*mult);
    save();
    displayNumChange();
}
setInterval(myTimer, 1000);