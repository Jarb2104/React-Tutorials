const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
console.log(randomNumber);
if (randomNumber > 0.7) {
	alert(`The number is now ${randomNumber} > 0.7`);
}

if ((randomNumber > 0.7 && randomNumber2 > 0.7) || randomNumber < 0.2 || randomNumber2 < 0.2) {
	alert(`The numbers are ${randomNumber} and ${randomNumber2}`);
}

let allMyNums = [];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

for (let i = 0; i < 14; i++) {
	allMyNums.push(getRandomInt(16));
}

for (let i = 13; i >= 0; i--) {
	console.log(allMyNums[i]);
}

for (const myNum of allMyNums) {
	console.log(myNum);
}
