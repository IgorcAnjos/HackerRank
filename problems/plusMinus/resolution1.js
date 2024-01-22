'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on('end', function () {
	inputString = inputString.split('\n');

	main();
});

function readLine() {
	return inputString[currentLine++];
}

function plusMinus(arr) {
	const plusMinus = {
		positive: 0,
		zero: 0,
		negative: 0,
	};

	const arrLength = arr.length;

	const populeplusMinusObject = (item) => {
		if (item >= 0) {
			if (item == 0) {
				plusMinus.zero += 1;
				return;
			}
			plusMinus.positive += 1;
			return;
		}

		plusMinus.negative += 1;
	};

	const logRatiosItem = (item) => {
		console.log((item / arrLength).toFixed(6));
	};

	arr.forEach((item) => populeplusMinusObject(item));

	logRatiosItem(plusMinus.positive);
	logRatiosItem(plusMinus.negative);
	logRatiosItem(plusMinus.zero);
}

function main() {
	const n = parseInt(readLine().trim(), 10);

	const arr = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map((arrTemp) => parseInt(arrTemp, 10));

	plusMinus(arr);
}
