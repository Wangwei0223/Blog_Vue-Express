const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js: \n', (answer) => {
    //TODO: Log the answer in a database
    console.log(`My answer is: ${answer}`);
    rl.close();
});