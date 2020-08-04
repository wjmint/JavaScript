const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

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
