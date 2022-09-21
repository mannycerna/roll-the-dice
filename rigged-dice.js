
/*This solution credit to google search.  I just edited a few lines to utilize the prompt and adjusted the number of times rolled.  I made the 6 side more weighted based on the results of the die variable.
*/

const prompt = require('prompt-sync')({sigint: true});

let roll = Number(prompt("Enter rigged side: "));

function keepRolling(times) {
    var die = [10, 50, 100, 140, 300, 400]; // How many times each number is rolled.
    for (var i = 0; i < times; i++) die[roll - 1]++;
    return die;
}

var die = keepRolling(1000); // Roll the die 1000 times.
// for loops thru all 6 sides to collect data and display proportion
for (var i = 0; i < 6; i++) {
    console.log("The number " + (i + 1) + " was rolled " + (die[i] / 100) + "% of the time.");
}
// function to generate random
function random() {
    return Math.ceil(1000 * Math.random()*6);
}
// function random() {
//     return Math.ceil( Math.random()*6);
// }
