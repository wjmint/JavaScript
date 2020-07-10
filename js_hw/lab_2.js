const {mkdir} = require('fs');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

//problem 1 - 1
var rectengular_2_1 = '222222';
var rectengular_2_2 = '2    2';
console.log(rectengular_2_1);
console.log(rectengular_2_2);
console.log(rectengular_2_2);
console.log(rectengular_2_1);

//problem 1 - 2
var A_first_line = '   A\n';
var A_second_line = '  A A\n';
var A_third_line = ' A   A\n';
var A_fourth_line = 'AAA AAA';
console.log(A_first_line + A_second_line + A_third_line + A_fourth_line);

// problem 2 - 1
console.log('Birthdate');
var birth_month = prompt('Enter Month');
var birth_date = prompt('Enter Date');
var bdi = 'Birthdate is';

function digits(a) {
	if (a > 10) {
		return true;
	} else {
		return false;
	}
}

switch (digits(birth_month)) {
	case true:
		switch (digits(birth_date)) {
			case true:
				console.log(bdi, birth_month, '-', birth_date);
				break;
			case false:
				console.log(bdi, birth_month, '-', '0' + birth_date);
				break;
			default:
				console.log('Wrong Date');
		}
	case false:
		switch (digits(birth_date)) {
			case true:
				console.log(bdi, '0' + birth_month, '-', birth_date);
				break;
			case false:
				console.log(bdi, '0' + birth_month, '-', '0', birth_date);
				break;
			default:
				console.log('Wrong Date');
		}
}

// problem 2 - 2
var bdi = 'Birthdate is';
var birth_month_date = prompt('Enter Month and Date with a white space');
var splited_birth_month_day = birth_month_date.split(' ');

var birth_month = splited_birth_month_day[0];
var birth_date = splited_birth_month_day[1];

function digits(a) {
	if (a > 9) {
		return true;
	} else {
		return false;
	}
}

if (digits(splited_birth_month_day[0]) == true) {
	if (digits(splited_birth_month_day[1]) == true) {
		console.log(bdi, birth_month, '-', birth_date);
	} else {
		console.log(bdi, birth_month, '-', '0' + birth_date);
	}
} else if (digits(splited_birth_month_day[0]) == false) {
	if (digits(splited_birth_month_day[1])) {
		console.log(bdi, '0' + birth_month, '-', birth_date);
	} else {
		console.log(bdi, '0' + birth_month, '-', '0' + birth_date);
	}
}

// problem 3
readline.question('Enter Integer\n>', (square_input) => {
	var square_int = Number(square_input);
	var temp1 = square_int - 1;
	console.log(' ');
	for (i = 0; i < square_int; i++) {
		if (i == 0 || i == temp1) {
			for (u = 0; u < square_int; u++) {
				if (u == temp1) {
					process.stdout.write(square_input + '\n');
				} else {
					process.stdout.write(square_input);
				}
			}
		} else {
			for (x = 0; x < square_int; x++) {
				if (x == 0) {
					process.stdout.write(square_input);
				} else if (x == temp1) {
					process.stdout.write(square_input + '\n');
				} else {
					process.stdout.write(' ');
				}
			}
		}
	}
	readline.close();
});

// problem 4
var curr = new Date();
var week = [];

for (i = 1; i <= 7; i++) {
	var first = curr.getDate() - curr.getDay() + i;
	var day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
	week.push(day);
}
console.log('Sun Mon Tue Wed Thr Fri Sat');
for (i = 0; i < 7; i++) {
	let string = week[i].substring(9, 10);
	if (i == 6) {
		process.stdout.write(' ' + string + '\n');
	} else {
		process.stdout.write(' ' + string + '  ');
	}
}

// problem 5
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Enter Inteager\n>', (int) => {
	for (i = 1; i <= 9; i++) {
		let multiply = int * i;
		console.log(int, '*', i, '=', multiply);
	}
	readline.close();
});

// problem 6 - unsolved
let factorial = [];
for (i = 1; i <= 5; i++) {
	let int = Number(i);
	if (i == 1) {
		factorial.push(int);
		console.log(i + '! =', factorial[i - 1]);
	} else {
		let temp = Number(factorial[i - 1] * int);
		factorial.push(Number(temp));
		console.log(i + '! =', factorial[i - 1]);
	}
}

// problem 7
let a = 1,
	b = 0,
	c;

for (i = 1; i <= 6; i++) {
	c = a;
	a += b;
	b = c;
	console.log(b);
}
