'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    console.log("input", inputString.trim().split('\n'))
    inputString = inputString.trim().split('\n')
    const n = inputString[0];
    const arraySocks = inputString[1].split(" ")
    main(n, arraySocks);    
});

function getPairs(n, ar) {
    const sortArray = ar.sort()
    let toEvaluate = ar[0]
    let totalByColor = 0
    let totalPairs = 0
    for(let i=0; i <= n ; i++){
         if(toEvaluate === sortArray[i]){
            totalByColor++
         } 
         else {
             totalPairs = totalPairs + Math.floor(totalByColor/2);
             toEvaluate = sortArray[i]
             totalByColor = 1
         }
    }
    return totalPairs;
}

/**** Ignore above this line. ****/

function main(n, arraySocks) {
    console.log("You entered the following text in the Input box:");
    const pairs = getPairs(n, arraySocks)
    // const input = readLine();
    console.log(pairs);
}