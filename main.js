var number = 0

function addOne(){
    number += 1
    
    document.getElementById("number").innerHTML = number;
    localStorage.setItem("number") = number;
}

function getNumber(){
    number = localStorage.getItem("number");
}