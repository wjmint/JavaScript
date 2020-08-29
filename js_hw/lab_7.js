const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
function add2(x, y) {
	return x + y;
}
let sum = 0,
	intsum = '';
readline.question('Input possitive integer\n>', possint => {
	if (possint <= 0) {
		console.log('Wrong input');
	} else {
		for (i = 1; i <= possint; i++) {
			sum = add2(i, sum);
		}
	}
	console.log(sum);
	readline.close();
});

// problem 2
function scale(a, b) {
	if (a >= b) {
		return true;
	} else {
		return false;
	}
}
readline.question('Input 2 integers(Whitespace between)\n>', twoint => {
	let strint = twoint.split(' ');
	let firstint = parseInt(strint[0]),
		secint = parseInt(strint[1]);
	let trueorfalse = scale(firstint, secint);
	let sum = 0;
	if (trueorfalse == true) {
		for (i = secint; i <= firstint; i++) {
			sum += i;
		}
	} else if (trueorfalse == false) {
		for (i = firstint; i <= secint; i++) {
			sum += i;
		}
	} else {
		console.log('Something got wrong!');
	}
	console.log(sum);
	readline.close();
});

// problem 3
readline.question('Input integer\n>', until => {
	let sum = 0;
	for (i = 1; i <= until; i++) {
		for (x = 1; x <= i; x++) {
			sum += x;
		}
	}
	console.log(sum);
	readline.close();
});

// problem 4
function print_row1(x) {
	resultstr = '';
	for (i = 1; i <= x; i++) {
		resultstr += `${x}`;
	}
	return resultstr;
}

function print_row2(x) {
	resultstr = '';
	for (i = 1; i <= x; i++) {
		if (i == 1 || i == x) {
			resultstr += `${x}`;
		} else {
			resultstr += ' ';
		}
	}
	return resultstr;
}

readline.question('Input integer between 2 and 9\n>', int => {
	let result1 = print_row1(int),
		result2 = print_row2(int);
	for (i = 1; i <= int; i++) {
		if (i == 1 || i == int) {
			console.log(result1);
		} else {
			console.log(result2);
		}
	}
	readline.close();
});

// problem 5
function print_triangle(x) {
	let str = '';
	for (i = 1; i <= x; i++) {
		for (a = 1; a <= i; a++) {
			str += '*';
		}
		console.log(str);
		str = '';
	}
}

readline.question('Input lots of integers(Whitespace between, >= 0 to end\n>', lotsofint => {
	arr = lotsofint.split(' ');
	for (i of arr) {
		if (i >= 1) {
			print_triangle(parseInt(i));
		} else {
			break;
		}
	}
	readline.close();
});

// problem 6
function f(x) {
	let result = 2 * (x * x) - 5 * x + 1;
	return result;
}

readline.question('Input integer\n>', int => {
	console.log(f(int));
	readline.close();
});

// problem 7
function f1(x, a, b, c) {
	let result = a * (x * x) + b * x + c;
	return result;
}

readline.question('Input 4 integers(Whitespace between)\n>', fourint => {
	let strint = String(fourint);
	let intarr = strint.split(' ');
	let firstint = parseInt(intarr[0]),
		secint = parseInt(intarr[1]),
		thirdint = parseInt(intarr[2]),
		fourthint = parseInt(intarr[3]);

	console.log(f1(firstint, secint, thirdint, fourthint));
	readline.close();
});

// problem 8
function f2(x, a, b, c) {
	let result = a * (x * x) + b * x + c;
	return result;
}

function g(x, a, b, c) {
	let result = a * (x * x) + b * x + c;
	return result;
}

readline.question('Input 7 integers(Whitespace between)\n>', manyints => {
	let strint = String(manyints);
	let arr = strint.split(' ');
	let firstint = parseInt(arr[0]),
		secondint = parseInt(arr[1]),
		thirdint = parseInt(arr[2]),
		fourthint = parseInt(arr[3]),
		fifthint = parseInt(arr[4]),
		sixthint = parseInt(arr[5]),
		seventhint = parseInt(arr[6]);

	console.log(g(f2(firstint, secondint, thirdint, fourthint), fifthint, sixthint, seventhint));
	readline.close();
});

// problem 9 - :(

// problem 10
readline.question('Input a possitive integer(sum of 3 dices)\n>', until => {
	let sum_of_dice = [];
	for (x = 1; x <= 6; x++) {
		for (y = 1; y <= 6; y++) {
			for (z = 1; z <= 6; z++) {
				if (x + y + z <= until) {
					sum_of_dice.push(`${x} ${y} ${z}`);
				} else {
					break;
				}
			}
		}
	}
	for (i of sum_of_dice) {
		console.log(i);
	}
	readline.close();
});
