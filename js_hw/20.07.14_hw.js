const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
// problem 1
readline.question('Input integer', int => {
	let star = 1;
	for (line = 1; line <= int; line++) {
		for (i = 1; i <= star; i++) {
			if (i == star) {
				console.log('*');
			} else {
				process.stdout.write('* ');
			}
		}
		star++;
	}

	readline.close();
});
// problem 2
readline.question('Input integer\n>', int => {
	for (line = 1; line <= int; line++) {
		let whitespace = int - line;
		if (line != int) {
			for (printf = 1; printf <= int; printf++) {
				if (printf <= whitespace) {
					process.stdout.write('  ');
				} else if (printf == int) {
					process.stdout.write('*\n');
				} else {
					process.stdout.write('* ');
				}
			}
		} else {
			for (printf = 1; printf <= int; printf++) {
				if (printf != int) {
					process.stdout.write('* ');
				} else {
					process.stdout.write('*\n');
				}
			}
		}
	}
	readline.close();
});

// problem 3
readline.question('Input integer\n>', int => {
	let star = '* ';
	for (line = 1; line <= int; line++) {
		let space = int - line;
		if (line != int) {
			for (printf = 1; printf <= int; printf++) {
				if (printf <= space) {
					process.stdout.write('  ');
				} else {
					console.log(star);
					break;
				}
			}
		} else {
			console.log(star);
		}
		star += '* * ';
	}
	readline.close();
});

// // problem 4
let int = 5;
let star = '*';
for (i = 0; i < 4; i++) {
	for (j = 4; j > i; j--) {
		process.stdout.write(' ');
	}
	console.log(star);
	star += '**';
}
for (i = 0; i < 5; i++) {
	for (x = 1; x <= i; x++) {
		process.stdout.write(' ');
	}
	for (y = 8; y > i * 2 - 1; y--) {
		process.stdout.write('*');
	}
	console.log('');
}
