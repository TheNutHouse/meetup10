function checkNumber(n){
return typeof n==="number" && n>100;
}

function greet(data){
return data=="spanish"?"Hola":"Hello";
}

function throwErr(){
    throw 'TypeError'
}

function findEven(n){
    n=n||throwErr();
    return n%2===0;
}

var a="Hello world";

if(a.indexOf("world")>=0){
    console.log("World Exists");
}else{
    console.log("False");
}


