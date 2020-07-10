const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
readline.question('Input a integer\n>', input => {
	console.log('Output(Number) ->', Number(input));
	console.log('Output(String) ->', String(input));
	readline.close();
});

// problem 2 - 1 (Number input)
let width = 0,
	length = 0,
	area = 0;
readline.question('Width: ', width_input => {
	width = width_input;
	readline.question('Length: ', length_input => {
		length = length_input;
		area = width * length;
		console.log('Area ->', area);
		readline.close();
	});
});

// problem 2 - 2 (Float input)
let width = 0,
	length = 0,
	area = 0;

readline.question('Width: ', width_input => {
	width = width_input;
	readline.question('Length: ', length_input => {
		length = length_input;
		area = width * length;
		console.log('Area ->', area.toPrecision(4));
		readline.close();
	});
});
