const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});



function getNumber() {
    readline.question("Write a number ", number => {
        if (number != 'stop') {
            getNumber();
        } else {
            readline.close();
        }
        
    });
}

getNumber();
