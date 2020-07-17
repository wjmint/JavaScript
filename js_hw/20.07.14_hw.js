const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
// problem 1
readline.question('Input integer\n>', int => {
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
					process.stdout.write(' ');
				} else if (printf == int) {
					process.stdout.write('*\n');
				} else {
					process.stdout.write('*');
				}
			}
		} else {
			for (printf = 1; printf <= int; printf++) {
				if (printf != int) {
					process.stdout.write('*');
				} else {
					process.stdout.write('*\n');
				}
			}
		}
	}
	readline.close();
});
