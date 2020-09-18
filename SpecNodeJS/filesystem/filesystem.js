const fs = require('fs');

const path = '../File1.txt';

function ReadAndDisplayProgress(err,stats){
    
    const stream = fs.createReadStream(path);
    stream.on("data", () => console.log('Lu', + stream.bytesRead / stats.size * 100 + '%'));
}

fs.stat(path,ReadAndDisplayProgress)
// fs.createReadStream()