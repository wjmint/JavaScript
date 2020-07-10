const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// // problem 1
// readline.question('Input a integer\n>', input => {
// 	console.log('Output(Number) ->', Number(input));
// 	console.log('Output(String) ->', String(input));
// 	readline.close();
// });

// // problem 2 - 1 (Number input)
// let width = 0,
// 	length = 0,
// 	area = 0;
// readline.question('Width: ', width_input => {
// 	width = width_input;
// 	readline.question('Length: ', length_input => {
// 		length = length_input;
// 		area = width * length;
// 		console.log('Area ->', area);
// 		readline.close();
// 	});
// });

// // problem 2 - 2 (Float input)
// let width = 0,
// 	length = 0,
// 	area = 0;

// readline.question('Width: ', width_input => {
// 	width = width_input;
// 	readline.question('Length: ', length_input => {
// 		length = length_input;
// 		area = width * length;
// 		console.log('Area ->', area.toPrecision(4));
// 		readline.close();
// 	});
// });

// // problem 3
// readline.question('Input (Float)\n>', float_input => {
// 	console.log('Round off ->', Math.round(float_input));
// 	readline.close();
// });

// // problem 4 - 1 (Lower case)
// readline.question('Input(lower case)\n>', lower_case => {
// 	console.log('Output(upper case) ->', lower_case.toUpperCase());
// 	readline.close();
// });

// // problem 4 - 2 (Upper case)
readline.question('Input(upper case)\n>', upper_case => {
	console.log('Output(lower case) ->', upper_case.toLowerCase());
	readline.close();
});
