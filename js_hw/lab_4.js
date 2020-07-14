const {stdin} = require('process');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
readline.question('Input integer between 0 and 99999\n>', number_input => {
	var str_input = String(number_input);
	var len = str_input.length;
	var exclamation_mark = '! ';
	if (5 - len != 0) {
		for (i = 1; i <= 5 - len; i++) {
			process.stdout.write('0 ! ');
		}
	}
	for (x = 1; x <= len; x++) {
		let str = str_input[x - 1];
		if (x == len) {
			console.log(str);
		} else {
			process.stdout.write(`${str} ${exclamation_mark}`);
		}
	}
	readline.close();
});

// problem 2
readline.question('Input positive integer\n>', input_second => {
	var sec = 00,
		min = 00,
		hou = 00,
		temp = 00;
	sec = input_second % 60;
	if (input_second >= 60) {
		temp = (input_second - sec) / 60;
		if (temp > 60) {
			min = temp % 60;
			hou = (temp - min) / 60;
		} else {
			temp = min;
		}
	}
	console.log('Time ->', hou, ':', min, ':', sec);
	readline.close();
});

// problem 3
readline.question('Input integer between 10000 and 99999\n>', number_input => {
	var str_input = String(number_input);
	console.log('Hundreds digit ->', Number(str_input[2]));
	readline.close();
});

// problem 4
readline.question('Input integer between 10000 and 99999\n>', number_input => {
	var nearest_thousand = 00;
	var string_input = String(number_input);
	var tenthousand = parseInt(string_input[0] + string_input[1] + '000');
	if (number_input % 1000 >= 500) {
		nearest_thousand = parseInt(tenthousand) + parseInt(1000);
	} else {
		nearest_thousand = parseInt(tenthousand);
	}
	console.log('Round at thousand ->', String(nearest_thousand));
	readline.close();
});

// problem 5
const pi = 3.14;
readline.question('Input number or float(circumference)\n>', circumference => {
	var radius = circumference / pi / 2;
	var area = pi * (radius * radius);
	console.log('Area of the circle ->', Math.round(area));
	readline.close();
});

// problem 6
readline.question('Input integer\n>', int => {
	if (int >= 20 && int <= 30) {
		console.log('1');
	} else {
		console.log('0');
	}
	readline.close();
});

// problem 7
readline.question('Input positive integer\n>', int => {
	if (int % 2 != 0) {
		console.log('Odd');
	} else {
		console.log('Even');
	}
	readline.close();
});

// problem 8
readline.question('Input two different integers(with a whitespace between)\n>', int => {
	var str_input = String(int);
	var two_int = str_input.split(' ');
	if (parseInt(two_int[1]) >= parseInt(two_int[0])) {
		console.log(parseInt(two_int[1]));
	} else {
		console.log(parseInt(two_int[0]));
	}
	readline.close();
});

// problem 9
readline.question('Input two different integers(with a whitespace between)\n>', int => {
	var str_input = String(int);
	var two_int = str_input.split(' ');
	first = parseInt(two_int[0]);
	second = parseInt(two_int[1]);
	if (first < second) {
		console.log('Quotinent ->', parseInt(second / first));
		console.log('Remainder ->', second % first);
	} else {
		console.log('Quotinent ->', parseInt(first / second));
		console.log('Remainder ->', first % second);
	}
	readline.close();
});
