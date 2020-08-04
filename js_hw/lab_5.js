const {read} = require('fs');
const {dirname} = require('path');

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

// problem 9
let strike = 0,
	ball = 0;
function get_random_Number(min, max) {
	return Math.floor(Math.random() * (max - min));
}
let answ1 = get_random_Number(0, 9),
	answ2 = get_random_Number(0, 9),
	answ3 = get_random_Number(0, 9);

while (answ1 == answ2 || answ1 == answ3 || answ2 == answ3) {
	(answ1 = get_random_Number(0, 9)), (answ2 = get_random_Number(0, 9)), (answ3 = get_random_Number(0, 9));
}
let bcounter = [answ1, answ2, answ3];
readline.question('Input 3 integers(whitespace between)\n>', int3 => {
	let strint = String(int3);
	let strarr = strint.split(' ');
	let guess1 = strarr[0],
		guess2 = strarr[1],
		guess3 = strarr[2];
	if (guess1 in bcounter) {
		if (guess1 == answ1) {
			strike++;
		} else {
			ball++;
		}
	} else if (guess2 in bcounter) {
		if (guess2 == answ2) {
			strike++;
		} else {
			ball++;
		}
	} else if (guess3 in bcounter) {
		if (guess3 == answ3) {
			strike++;
		} else {
			ball++;
		}
	}
	console.log(`${strike}S ${ball}B`);
	readline.close();
});

// problem 10
readline.question('Input an equation that uses - or + operator\n>', equation => {
	let parts_of_equation = equation.split(' ');
	let firstNum = parseInt(parts_of_equation[0]);
	let secondNum = parseInt(parts_of_equation[2]);
	let operator = String(parts_of_equation[1]);

	let result = 0;
	if (operator == '+') {
		result = firstNum + secondNum;
		console.log(`${equation} = ${result}`);
	} else if (operator == '-') {
		result = firstNum - secondNum;
		console.log(`${equation} = ${result}`);
	} else {
		console.log('Wrong Operator');
	}
	readline.close();
});

// problem 11
let won500 = 0,
	won100 = 0;
function change_counter(drink, money) {
	switch (drink) {
		case 1:
			temp = money - 500;
			break;
		case 2:
			temp = money - 400;
			break;
		case 3:
			temp = money - 300;
			break;
	}
	temp = money - 500;
	if (temp >= 500) {
		won500 = temp / 500;
		won100 = (temp % 500) / 100;
	} else {
		won100 = temp / 100;
	}
}
readline.question(
	'1. Americano(W500) 2. Caffe Latte(W400) 3. Lemon Tea(W300)\nselect your beverage by number, and input money(multiple of 100)\n>',
	bending_machine => {
		let arr_bending_machine = bending_machine.split(' ');
		let beverage = parseInt(arr_bending_machine[0]),
			money_input = parseInt(arr_bending_machine[1]);
		switch (beverage) {
			case 1:
				console.log('Americano');
				change_counter(beverage, money_input, won100, won500);
				console.log(`${won100} ${won500}`);
				break;
			case 2:
				console.log('Caffe Latte');
				change_counter(beverage, money_input, won100, won500);
				console.log(`${won100} ${won500}`);
				break;
			case 3:
				console.log('Lemon Tea');
				change_counter(beverage, money_input, won100, won500);
				console.log(`${won100} ${won500}`);
				break;
			default:
				console.log(`beverage ${beverage} is not on menu.`);
		}
		readline.close();
	}
);
