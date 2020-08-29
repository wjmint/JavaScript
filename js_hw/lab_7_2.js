const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
function add(a, b) {
	return a + b;
}

readline.question('Input a positive integer\n>', strinput => {
	let result = 0,
		intinput = parseInt(strinput);
	for (i = 1; i <= intinput; i++) {
		result = add(result, i);
	}
	console.log(result);
	readline.close();
});

// problem 2
const sum = (a, b) => {
	return a + b;
};

readline.question('Input two integers(whitespace between)\n>', strinput => {
	let arrinput = strinput.split(' ');
	let firstint = parseInt(arrinput[0]),
		secondint = parseInt(arrinput[1]);
	let result = 0;
	if (firstint > secondint) {
		for (i = secondint; i <= firstint; i++) {
			result += i;
		}
	} else {
		for (i = firstint; i <= secondint; i++) {
			result += i;
		}
	}
	console.log(result);
	readline.close();
});

// problem 3
readline.question('Input a positive integer\n>', strinput => {
	let arrresults = [],
		result = 0;
	for (i = 1; i <= strinput; i++) {
		result += i;
		arrresults.push(result);
	}

	result = 0;
	for (i of arrresults) {
		result += i;
	}
	console.log(result);
	readline.close();
});

// problem 4
const print1 = int => {
	resultstr = '';
	for (i = 1; i <= int; i++) {
		resultstr += `${int}`;
	}
	return resultstr;
};

const print2 = int => {
	resultstr = '';
	for (i = 1; i <= int; i++) {
		if (i == 1 || i == int) {
			resultstr += `${int}`;
		} else {
			resultstr += ' ';
		}
	}
	return resultstr;
};

readline.question('Input an integer between 2 and 9\n>', strinput => {
	let result1 = print1(strinput),
		result2 = print2(strinput);
	for (i = 1; i <= strinput; i++) {
		if (i == 1 || i == strinput) {
			console.log(result1);
		} else {
			console.log(result2);
		}
	}
	readline.close();
});

// problem 5
function print_triangle(int) {
	let str = '';
	for (i = 1; i <= int; i++) {
		for (a = 1; a <= i; a++) {
			str += '*';
		}
		console.log(str);
		str = '';
	}
}

readline.question('Input lots of integers(Whitespace between, >= 0 to end\n>', strinput => {
	arr = strinput.split(' ');
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
let f = x => {
	return 2 * (x * x) - 5 * x + 1;
};

readline.question('Input a integer\n>', strinput => {
	let intinput = parseInt(strinput),
		result = f(intinput);
	console.log(result);
	readline.close();
});

// problem 7
let f = (x, a, b, c) => {
	return a * (x * x) + b * x + c;
};

readline.question('Input 4 integers(whitespace between)\n>', strinput => {
	let arrinput = strinput.split(' ');
	let result = f(parseInt(arrinput[0]), parseInt(arrinput[1]), parseInt(arrinput[2]), parseInt(arrinput[3]));
	console.log(result);
	readline.close();
});

// problem 8
let f = (x, a, b, c) => {
	return a * (x * x) + b * x + c;
};

let g = (x, a, b, c) => {
	let result = a * (x * x) + b * x + c;
	return result;
};

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

	console.log(g(f(firstint, secondint, thirdint, fourthint), fifthint, sixthint, seventhint));
	readline.close();
});

// // probmlem 9 - NaN
// readline.question('Input integers(whitespace between, 0 to end)\n>', strinput => {
// 	let arrinput = strinput.split(' '),
// 		arrresults = [],
// 		biggest = 0,
// 		second_biggest = 0;
// 	for (i of arrinput) {
// 		if (i != 0) {
// 			arrresults.push(i);
// 		} else {
// 			break;
// 		}
// 	}
// 	biggest = Math.max(arrresults);
// 	arrresults.pop(biggest);
// 	second_biggest = Math.max(arrresults);
// 	console.log(`${biggest}\n${second_biggest}`);

// 	readline.close();
// });

// problem 10
readline.question('Input a possitive integer(sum of 3 dices)\n>', strinput => {
	let sum_of_dice = [];
	for (x = 1; x <= 6; x++) {
		for (y = 1; y <= 6; y++) {
			for (z = 1; z <= 6; z++) {
				if (x + y + z <= strinput) {
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
