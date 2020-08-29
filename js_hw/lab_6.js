const {PassThrough} = require('stream');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
let submultiple = [],
	whilecounter = 1;

readline.question('Input integer\n>', input => {
	while (whilecounter <= input) {
		if (input % whilecounter == 0) {
			submultiple.push(whilecounter);
		}
		whilecounter++;
	}
	for (i of submultiple) {
		process.stdout.write(`${i} `);
	}
	console.log(' ');
	readline.close();
});

// problem 2 - not able for Node.js

// problem 3 - god damit, really?

// problem 4
let factorial = 1;
for (i = 2; i <= 10; i++) {
	process.stdout.write(`${i} = `);
	for (x = 1; x <= i; x++) {
		if (x != i) {
			process.stdout.write(`${x} * `);
		} else {
			process.stdout.write(`${x} = `);
		}
		factorial = factorial * x;
	}
	console.log(String(factorial));
	factorial = 1;
}

// problem 5
readline.question('Input 2 integers(whitespace between each other)\n>', twoint => {
	let strint = String(twoint);
	let dividedint = strint.split(' ');
	let firstint = parseInt(dividedint[0]),
		secondint = parseInt(dividedint[1]);
	let greatest_common_denominator = 0;
	if (firstint < secondint) {
		for (i = 1; i <= secondint; i++) {
			if (firstint % i == 0 && secondint % i == 0) {
				greatest_common_denominator = i;
			}
		}
	} else {
		for (i = 1; i <= firstint; i++) {
			if (firstint % i == 0 && secondint % i == 0) {
				greatest_common_denominator = i;
			}
		}
	}
	console.log(greatest_common_denominator);
	readline.close();
});

// problem 6
let int = 5;
let star = '*';
for (i = 0; i < 4; i++) {
	for (j = 4; j > i; j--) {
		process.stdout.write(' ');
	}
	console.log(star);
	star += '**';
}
for (i = 0; i < 5; i++) {
	for (x = 1; x <= i; x++) {
		process.stdout.write(' ');
	}
	for (y = 8; y > i * 2 - 1; y--) {
		process.stdout.write('*');
	}
	console.log('');
}

// problem 7

// problem 8
let longarr = [];
let strinput = '';
let pices_of_input;
let count3 = 0;
readline.question('Input a Number\n>', input => {
	let numinput = parseInt(input);
	for (i = 1; i <= numinput; i++) {
		strinput = i.toString();
		pices_of_input = strinput.split('');
		for (x of pices_of_input) {
			longarr.push(x);
		}
	}
	for (i of longarr) {
		if (i == '3') {
			count3++;
		}
	}
	console.log(count3);
	readline.close();
});

// problem 9

// problem 10
readline.question('Input integer >= 10\n>', input => {
	let strint = String(input);
	let intarr = strint.split('');
	let num = 0;
	let int = 0;
	let result = '';
	while (intarr.length != 1) {
		for (i of intarr) {
			int = parseInt(i);
			num *= int;
		}
		strint = String(num);
		intarr = strint.split('');
		console.log(strint);
	}
	console.log();
	readline.close();
});
