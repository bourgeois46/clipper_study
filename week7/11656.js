let fs = require('fs'); 
let input = fs.readFileSync('/dev/stdin').toString().split('\n'); 

const arr = [];
for (let i = 0; i < word.length; i++) // 부분문자열 생성
    arr.push(word.slice(i));

console.log(arr.sort().join("\n")); // 사전식 순서 정렬
