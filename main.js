var number = 0
var cpc=1
function addOne(){
    number += cpc
    
    document.getElementById("number").innerHTML = number;
    save();
}

function getNumber(){
    number = localStorage.getItem("number");
    addOne();
}

function save(){
    localStorage.setItem("num", number);
    localStorage.setItem("cpc", cpc)
}

function load(){
    number = parseInt(localStorage.getItem("num"))-1;
    addOne();
}

function reset(){
    number = -1;
    addOne();
}

function buyUpgradeOne(){
    if (number >= 100){
        number-=100
        cpc+=1
    }
    save();
}