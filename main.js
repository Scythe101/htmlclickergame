var number = 0
var cpc=1
function addOne(){
    number += cpc
    
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
}

function load(){
    number = parseInt(localStorage.getItem("num"));
    cpc = parseInt(localStorage.getItem("cpc"));
    displayNumChange();
}

function reset(){
    number = 0;
    displayNumChange();
}

function buyUpgradeOne(){
    if (number >= 100){
        number-=100
        cpc+=1
    }
    displayNumChange();
    save();
}

function displayNumChange(){
    document.getElementById("number").innerHTML = "$" + number;
    document.getElementById("cpc").innerHTML = "Dollars per Click: " + cpc;
}