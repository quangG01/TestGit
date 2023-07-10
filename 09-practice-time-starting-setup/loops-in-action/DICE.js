//calculator
var num = document.querySelector("#user-number").value;
var btn1 = document.querySelector("#calculator button");
var out = document.querySelector("#calculated-sum");

function cal(){
    var output =0;
    for(var i = 0 ;i <= num;i++)
    {
        output = output + i;
        
    }
    
    out.innerHTML = output;
    out.style.display ='block';
}


btn1.addEventListener('click',cal);

//hightlight link
var btn2 = document.querySelector("#highlight-links button");

function lai(){
    var a = document.querySelectorAll("#highlight-links p a");
    for (var x of a){
        x.classList.add("highlight");
    }
}
btn2.addEventListener('click',lai);

//for in ======================
const alo = {
    firstname :"quang",
    lastname :"Dinh",
    age : 21
}
const btn3 = document.querySelector("#user-data button");

function display(){
    const ul = document.querySelector("#output-user-data");
    ul.innerHTML ='';
    // const li2 = document.createElement("li");
    // const li3 = document.createElement("li");
    for (var x in alo)
    {
        const li1 = document.createElement("li");
        const ot = x + ':' + alo[x];
        li1.innerHTML = ot;
        ul.append(li1);
    }
   
}
btn3.addEventListener('click',display);

//while=======================
var btn5 = document.querySelector("#statistics button");


var dem =0;
function cal(){
    return Math.floor(Math.random() * 6) +1;
}
function show(){
    var numIn = document.querySelector("#user-target-number");
    var ull = document.querySelector("#dice-rolls");
    var numInV = numIn.value;
    ull.innerHTML= "";
    var Sai = false;
    while(!Sai){
        var numOut = cal();
        dem++;
        var lo = document.createElement("li");
        lo.innerHTML = "roll" + dem + "de ra"+ numOut;    
        ull.append(lo);
        Sai = numOut == numInV;
    }
   
}


btn5.addEventListener("click",show);