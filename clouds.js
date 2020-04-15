'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(n, c) {
    console.log(n, c)
    let currentCloud = 0
    let numberOfJumps = 0;

    for(let i=0; i< n; i++){
        currentCloud++
        if(c[i] == 1 || currentCloud >= 2){
            numberOfJumps++
            currentCloud = 0
        }
    }
    return numberOfJumps

}

function main() {

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(n, c);

    console.log("result", result)
}
