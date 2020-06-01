"use strict";


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 5;
    console.log(num);
}

showFirstMessage("Hello World");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(1, 1));
console.log(calc(1, 2));
console.log(calc(1, 3));