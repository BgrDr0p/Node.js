const fs = require('fs');

const bigFileWatch = fs.watch('./File.txt');

bigFileWatch.on("change", (changeType) => console.log(changeType));