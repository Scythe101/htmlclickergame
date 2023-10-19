let number = 0;
let cpc=1;
let cps=0;
let upgrOneVal=0;
let upgrTwoVal=0;
let upgrThreeVal=0;
let upgrFourVal=0;
let mult=1;
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
    localStorage.setItem("cps", cps);
    localStorage.setItem("upgrOneVal", upgrOneVal);
    localStorage.setItem("upgrTwoVal", upgrTwoVal);
    localStorage.setItem("upgrThreeVal", upgrThreeVal);
    localStorage.setItem("upgrFourVal", upgrFourVal);
    localStorage.setItem("mult", mult);
    localStorage.setItem("saved", true);
    localStorage.setItem("goal", goal);
}



function load(){
    if (localStorage.getItem("saved")) {
        number = parseInt(localStorage.getItem("num"));
        cpc = parseInt(localStorage.getItem("cpc"));
        upgrOneVal = parseInt(localStorage.getItem("upgrOneVal"));
        upgrTwoVal = parseInt(localStorage.getItem("upgrTwoVal"));
        cps = parseInt(localStorage.getItem("cps"));
        upgrThreeVal = parseInt(localStorage.getItem("upgrThreeVal"));
        mult = parseFloat(localStorage.getItem("mult"));
        upgrFourVal = parseInt(localStorage.getItem("upgrFourVal"));
        goal = parseFloat(localStorage.getItem("goal"));
        displayNumChange();
    } else {
        reset(true)
    }
}

function reset(bypass){
    if (!bypass) {
        var doit = false
        if (confirm("Are you sure you want to do that?")) {
            if (confirm("Are you really, truly sure???")) {
                doit = true
            }
        }

        if (!doit) {
            return
        }
    }
    
    number = 0;
    cpc = 1;
    upgrOneVal = 0;
    cps = 0;
    upgrTwoVal = 0;
    upgrThreeVal = 0;
    mult = 1;
    upgrFourVal = 0;
    save();
    displayNumChange();
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

function buyUpgradeFour(){
    if (number >= Math.floor(8000 *(1.75**upgrFourVal))){
        number-= Math.floor(8000 *(1.75**upgrFourVal));
        cpc += 5;
        upgrFourVal+=1;
    }
    displayNumChange();
    save();
}

function displayNumChange(){
    document.getElementById("number").innerHTML = "$" + number;
    document.getElementById("cpc").innerHTML = "Dollars per Click: " + cpc;
    document.getElementById("cps").innerHTML = "Dollars per Second: " + cps;
    document.getElementById("mult").innerHTML = "Multiplier: " + mult + "x";
    document.getElementById("upgradeOne").innerHTML = "Upgrade Dollars per Click by 1: $" + 25*(2**upgrOneVal);
    document.getElementById("upgradeTwo").innerHTML = "Upgrade Dollars per Second by 1: $" + 200*(2**upgrTwoVal);
    document.getElementById("upgradeThree").innerHTML = "Upgrade Multiplier by 0.25x: $" + 1600*(2**upgrThreeVal);
    document.getElementById("upgradeFour").innerHTML = "Upgrade Dollars per Click by 5: $" + Math.floor(8000 *(1.75**upgrFourVal));
    document.getElementById('goal').innerHTML = "Goal: $" + goal;
}


function myTimer() {
    number += Math.floor(cps*mult);
    save();
    displayNumChange();
}


var count = 0;
var numSec = 1;
var start = 0;
window.addEventListener("click", function() {
    count++;
    start++;
  //clicks.innerHTML = start;
});

getCPS();

function getCPS() {
    setTimeout(function() {
        document.getElementById("cpscounter").innerHTML = "CPS: " + count;
        estimate = Math.floor((goal-number)/(cps+count*cpc));
        if (estimate>0) {
            document.getElementById("est").innerHTML = "Time to goal: " + estimate;
        }
        else{
            document.getElementById("est").innerHTML = "Goal Achieved";
        }
        
        count = 0;
        getCPS();
    }, numSec*1000);
}

function setGoal() {
    if (document.getElementById('goalOne').value==0){
        alert("input a value!")
    }
    else{
        goal = document.getElementById('goalOne').value;
        document.getElementById('goalOne').value = 0;
        displayNumChange();
        save();
    }
}

setInterval(myTimer, 1000);