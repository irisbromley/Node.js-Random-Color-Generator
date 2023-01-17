import chalk from 'chalk';
import randomColor from 'randomcolor'; // import the script
import readline from 'readline-sync';

let hue = process.argv[2];
let luminosity = process.argv[2];

if (process.argv[2] === 'ask') {
  hue = readline.question('What color would you like?');
  luminosity = readline.question('What luminosity would you like?');
}

// const luminosity = process.argv[3];
const color = randomColor({
  luminosity,
  hue,
});

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
