const arraynumber = [2, 1, 4, 5, 6, 8, 7, 9, 3];
console.log(arraynumber.filter((num) => num > 5));
console.log(arraynumber.map((num) => ({ id: num })));
console.log(arraynumber.reduce((prev, next) => prev * next, 1));

function findMax(...someArray) {
	let max = -99999999;
	for (const num of someArray) {
		max = max > num ? max : num;
	}
	console.log(max);
}

findMax(...arraynumber);

function findMaxAndMin(...someArray) {
	let max = -99999999;
	let min = 99999999;
	for (const num of someArray) {
		max = max > num ? max : num;
		min = min > num ? num : min;
	}

	return [min, max];
}

const [minFound, maxFound] = findMaxAndMin(...arraynumber);
console.log(minFound, maxFound);

const someList = new set();
