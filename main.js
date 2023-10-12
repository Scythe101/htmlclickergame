var number = 0

function addOne(){
    number += 1
    
    document.getElementById("number").innerHTML = number;
    localStorage.setItem("number") = number;
}

function getNumber(){
    number = localStorage.getItem("number");
    addOne();
}

function save(){
    localStorage.setItem("num", number);
}

function load(){
    number = parseInt(localStorage.getItem("num"))-1;
    addOne();
}

function reset(){
    number = -1;
    addOne();
}