'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

const line = (array) =>{
    let current = 0
    return () => {
       const line = array[current]
       current++
       return line
    }
};

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    console.log("input", inputString.trim().split('\n'))
    inputString = inputString.trim().split('\n')
    main(inputString);    
});

function numberOfShakes(n) {
    return (n*(n-1))/2
}

/**** Ignore above this line. ****/

function main(inputString) {
    console.log("You entered the following text in the Input box:");
    const pairs = numberOfShakes(inputString)
    console.log(pairs);
}