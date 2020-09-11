const fs = require('fs');
const writeFileStream = fs.createWriteStream('../File1.txt');

process.stdin.setEncoding('utf-8');


process.stdin.pipe(writeFileStream);