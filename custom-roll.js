

const prompt = require('prompt-sync')({sigint: true});

let numSides = prompt("Welcome User. How many sided die do you wish to use: ");

 let result = Math.ceil(Math.random() * numSides);
 console.log(result);