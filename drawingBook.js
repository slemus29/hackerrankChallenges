'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n')
    main(inputString);    
});

function pageCount(n, p) {
    console.log("n,p",n,p)
    if(p > n/2){
        console.log("desde el final")
        if(p%2 == 1){
            return Math.floor((n - p)/2) 
        } else {
            return Math.ceil((n - p)/2) 
        }
        
    } else {
        console.log("desde el principio")
        return Math.ceil((p - 1)/2)
    }
}

/**** Ignore above this line. ****/

function main() {

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    console.log(result)
}