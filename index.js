import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script

const color = randomColor();

function logWithColor(value) {
  console.log(chalk.hex(color)(value));
}

// get a 31x3 block of # character
for (let i = 0; i < 3; i++) {
  logWithColor('#'.repeat(31));
}

logWithColor('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
logWithColor(
  '#'.repeat(5) + ' '.repeat(7) + color + ' '.repeat(7) + '#'.repeat(5),
);
logWithColor('#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5));
for (let i = 0; i < 3; i++) {
  logWithColor('#'.repeat(31));
}

logWithColor(color);
