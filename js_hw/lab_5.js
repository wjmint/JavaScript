const {read} = require('fs');

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// problem 1
readline.question('Input integer\n>', int => {
	if (int < 0) {
		console.log('Indoor activity');
	} else if (int >= 0 && int <= 4) {
		console.log('Outdoor activity');
	} else if (int >= 40) {
		console.log('Indoor activity');
	}
	readline.close();
});

// problem 2
readline.question('Input two integers(with a whitespace between)\n>', int => {
	var str_input = String(int),
		two_str = str_input.split(' '),
		first = parseInt(two_str[0]),
		second = parseInt(two_str[1]);
	var square_first = first * first,
		square_second = second * second;
	if (first < second) {
		if (square_first == second) {
			console.log(first, '*', first, '=', second);
		} else {
			console.log('none');
		}
	} else {
		if (square_second == first) {
			console.log(second, '*', second, '=', first);
		} else {
			console.log('none');
		}
	}
	readline.close();
});

// problem 3
readline.question('Input 2 integers(with a whitespace between)\n>', int => {
	var str_input = String(int),
		two_str = str_input.split(' '),
		first = parseInt(two_str[0]),
		second = parseInt(two_str[1]);
	if (first >= second) {
		console.log(first);
	} else {
		console.log(second);
	}
	readline.close();
});

// problem 4
readline.question('Input 2 integers(with a whitespace between)\n>', int => {
	var str_input = String(int),
		three_str = str_input.split(' '),
		first = parseInt(three_str[0]),
		second = parseInt(three_str[1]),
		third = parseInt(three_str[2]);
	if (first > second && first > third) {
		if (second > third) {
			console.log(first, third);
		} else {
			console.log(first, second);
		}
	} else if (second > first && second > third) {
		if (first > third) {
			console.log(second, third);
		} else {
			console.log(second, first);
		}
	} else if (third > first && third > second) {
		if (first > second) {
			console.log(third, second);
		} else {
			console.log(third, first);
		}
	}
	readline.close();
});

// problem 5
readline.question('Input a integer\n>', int => {
	var divide_2 = int % 2,
		divide_3 = int % 3,
		divide_5 = int % 5;
	let divide = [];
	if (divide_2 == 0) {
		divide.push(1);
	} else {
		divide.push(0);
	}
	if (divide_3 == 0) {
		divide.push(1);
	} else {
		divide.push(0);
	}
	if (divide_5 == 0) {
		divide.push(1);
	} else {
		divide.push(0);
	}
	var div2 = divide[0],
		div3 = divide[1],
		div5 = divide[2];

	switch (div2) {
		case 1:
			switch (div3) {
				case 1:
					if (div5 == 1) {
						console.log('A');
					} else if (div5 == 0) {
						console.log('B');
					}
					break;
				case 0:
					if (div5 == 1) {
						console.log('C');
					} else if (div5 == 0) {
						console.log('E');
					}
					break;
				default:
					console.log('Error');
			}
			break;
		case 0:
			switch (div3) {
				case 1:
					if (div5 == 1) {
						console.log('D');
					} else if (div5 == 0) {
						console.log('E');
					}
					break;
				case 0:
					if (div5 == 1) {
						console.log('E');
					} else if (div5 == 0) {
						console.log('N');
					}
					break;
				default:
					console.log('Error');
			}
			break;
		default:
			console.log('error');
	}
	readline.close();
});

// problm 6
readline.question('Input integer(year)\n>', year => {
	if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				console.log('Leap year');
			} else {
				console.log('Normal year');
			}
		} else {
			console.log('Leap year');
		}
	} else {
		console.log('Normal year');
	}
	readline.close();
});

// problem 7 - unsolved
const answer = Math.random() * 10;
const prompt = require('prompt-sync')();
let guess = 0;
while (answer != guess) {
	guess = prompt('Guess the number\n>');
	if (answer > guess) {
		console.log('Up');
	} else if (answer < guess) {
		console.log('Down');
	} else {
		console.log('Correct!');
		break;
	}
}

// problem 8
readline.question('Input a character\n>', char => {
	let ascii = char.charCodeAt();
	if (ascii >= 65 && ascii <= 90) {
		var letter = String.fromCharCode(ascii + 32);
		console.log(letter);
	} else if (ascii >= 97 && ascii <= 122) {
		var letter = String.fromCharCode(ascii - 32);
		console.log(letter);
	} else {
		console.log('none');
	}
	readline.close();
});
