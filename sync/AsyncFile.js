const fs = require('fs');


function generateData() {
    let data = '0';

    for (let i = 0; i < 1000000; i++) {
        data += Math.random() * 10;
    }
    return data;
}

function callback() {
    console.log('Process durée ' + (Date.now() - date) + ' ms')
}

fs.writeFile('File.txt', generateData(), callback)
const date = Date.now();
console.log('fini ! ');


// argument à un callBack

fs.readFile('File.txt', (err,data) => {
    if(err){
        throw new Error('Erreur !');
    }
    console.log(data)
})

