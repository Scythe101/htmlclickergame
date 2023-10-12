var number = 0
var cpc=1
var cps=0
var upgrOneVal=0
var upgrTwoVal=0
function addOne(){
    number += cpc;
    
    displayNumChange();
    save("num", number);
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
}



function load(){
    number = parseInt(localStorage.getItem("num"));
    cpc = parseInt(localStorage.getItem("cpc"));
    upgrOneVal = parseInt(localStorage.getItem("upgrOneVal"));
    upgrTwoVal = parseInt(localStorage.getItem("upgrTwoVal"));
    cps = parseInt(localStorage.getItem("cps"));
    displayNumChange();
}

function reset(){
    if (confirm("Are you sure you want to reset?") === true){
        number = 0;
        cpc = 1;
        upgrOneVal = 0;
        cps = 0;
        upgrTwoVal = 0;
        save();
        displayNumChange();
    }
}

function buyUpgradeOne(){
    if (number >= 100+50*(upgrOneVal)){
        number-=100+50*(upgrOneVal);
        cpc+=1;
        upgrOneVal+=1;
    }
    displayNumChange();
    save();
    save();
}

function buyUpgradeTwo(){
    if (number >= 500+100*(upgrTwoVal)){
        number-=500+100*(upgrTwoVal);
        cps+=1;
        upgrTwoVal+=1;
    }
    displayNumChange();
    save();
}


function displayNumChange(){
    document.getElementById("number").innerHTML = "$" + number;
    document.getElementById("cpc").innerHTML = "Dollars per Click: " + cpc;
    document.getElementById("cps").innerHTML = "Dollars per Second: " + cps;
    document.getElementById("upgradeOne").innerHTML = "Upgrade One: $" + (100+50*(upgrOneVal));
    document.getElementById("upgradeTwo").innerHTML = "Upgrade Two: $" + (500+100*(upgrTwoVal));
}


function myTimer() {
    number += cps;
    displayNumChange();
}
setInterval(myTimer, 1000);