
const inputb = document.querySelector("input");
const button = document.querySelector("#btn");
const maxlength = inputb.maxLength;
const number = document.querySelector("#number");
// const warningtext = document.querySelector("#number").classList;//truy cap vao class cua number
// const warninginput = document.querySelector("#input").classList

function clear(){
    const clearelem = inputb;
    clearelem.value = '';
}
function inputa(){
    const dem = inputb.value 
    const numleft = maxlength - dem.length;
    //console.log(numleft);
    number.innerHTML = numleft
    //var lengthLeft = inputb.maxLength ;
    //console.log(event);
    if (numleft <= 10)
    {
        number.classList.add("text-danger");
        inputb.classList.add("bg-danger");
    }
    else{
        number.classList.remove("text-danger");
        inputb.classList.remove("bg-danger");
    }
    if (numleft ===0){
        alert("no more space");
    }
}
inputb.addEventListener("input",inputa);
button.addEventListener("click",clear);
