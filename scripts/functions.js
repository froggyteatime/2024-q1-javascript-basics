//@ts-check

let sayHi = function(){
    let firstName = "Will";
    let age = 14;
    let greeting = "Hello My Name is"+firstName+"and I am"+age+"years old";
    console.log(greeting);
};

sayHi();

//console.log(firstName)

function add(a,b){
    let answer = a + b;
    return answer;
};
console.log(add (100,5000))