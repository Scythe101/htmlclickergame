var number = 0
var cpc=1
var upgrOneVal=0
function addOne(){
    number += cpc
    
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
    localStorage.setItem("upgrOneVal", upgrOneVal);
}

function load(){
    number = parseInt(localStorage.getItem("num"));
    cpc = parseInt(localStorage.getItem("cpc"));
    upgrOneVal = parseInt(localStorage.getItem("upgrOneVal"));
    displayNumChange();
}

function reset(){
    number = 0;
    cpc = 1;
    upgrOneVal = 0;
    save();
    displayNumChange();
}

function buyUpgradeOne(){
    if (number >= 100+50*(upgrOneVal)){
        number-=100;
        cpc+=1;
        upgrOneVal+=1;
    }
    displayNumChange();
    save("cpc", cpc);
    save("upgrOneVal", upgrOneVal);
}

function displayNumChange(){
    document.getElementById("number").innerHTML = "$" + number;
    document.getElementById("cpc").innerHTML = "Dollars per Click: " + cpc;
    document.getElementById("upgradeOne").innerHTML = "Upgrade One: $" + (100+50*(upgrOneVal));
}