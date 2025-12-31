// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let count = 0;
while (count < 10) {
    console.log(count);
    count++;
}

let maximum = parseInt(prompt("Enter the maximum number!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"))
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;

    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("Too low! Enter a new guess!");
    }
}

if (guess === 'q') {
    console.log("OK, YOU QUIT!");
} else {
    console.log("CONGRATS YOU WIN!");
    console.log(`You got it! It took you ${attempts} guesses`)
}