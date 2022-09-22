

const prompt = require('prompt-sync')({sigint: true});

let numSides = Number(prompt("Welcome. Please enter a number which identifies the number of sides in dice: "));

 let result = Math.ceil(Math.random() * numSides);
 console.log(result);