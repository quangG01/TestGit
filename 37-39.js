
//f======================for
//var n = document.querySelector();
for(var i =0;i< 10;i++)
{
    console.log(i);
}
//=========================for of ( use less )
const user = ['quang','thao','hanh'];
for (const x of user)
{
    //console.log(x);
}

//=========================for in 
const alo = {
    name : 'quang',
    stt : 1,
    isAdmin : true,
}
for ( var x in alo){
    //console.log(alo[x]);
}
//==================while
var ok = false;
while (!ok){
    ok = confirm("ok?");
}
console.log("ok")