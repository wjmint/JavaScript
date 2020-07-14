const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// lab4 - problem 1
readline.question('Input integer between 0 and 99999\n>', int => {
	let string_int = String(int);
	let int_len = string_int.length;
	const exclamation_mark = '! ';
	if (int_len != 5) {
		for (i = 1; i <= 5 - int_len; i++) {
			process.stdout.write('0 ! ');
		}
	}
	for (x = 1; x <= int_len; x++) {
		var str = string_int[x - 1];
		if (x == int_len) {
			console.log(str);
		} else {
			process.stdout.write(`${str} ${exclamation_mark}`);
		}
	}
	readline.close();
});
// lab4 - problem 2
readline.question('Input Positive integer(second)\n>', int => {
	let sec = 00,
		min = 00,
		hou = 00,
		temp = 00;
	sec = int % 60;
	if (int >= 60) {
		temp = (int - sec) / 60;
		if (temp > 60) {
			min = temp % 60;
			hou = (temp - min) / 60;
		} else {
			temp = min;
		}
	}
	console.log('time ->', hou, ':', min, ':', sec);
	readline.close();
});

// lab4 - problem 4
readline.question('Input integer between 10000 and 99999\n>', int => {
	let string_int = String(int);
	let hundred_digit = string_int[2];
	if (hundred_digit >= 5) {
		console.log(parseInt(string_int[0] + string_int[1] + '000') + 1000);
	} else {
		console.log(parseInt(string_int[0] + string_int[1] + '000'));
	}
	readline.close();
});
