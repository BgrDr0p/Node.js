const stream = require('stream');
const fs = require('fs');

class generateDataStream extends stream.Readable {

    constructor(iterationNumber)
    {
        super();
        this._iterationNumber = parseInt(iterationNumber);
        this._index = 0;

    }
    _read() {
        const i = this._index++;
        if (i > this._iterationNumber)
            this.push(null);
            else
            {
                const string = ' ' + Math.random() * 10;
                const buffer = Buffer.from(string);
                this.push(buffer);
            }
        
    }
}

const dataStream = new generateDataStream(4000000);
const writeStream = fs.createWriteStream('../File1.txt');

dataStream.pipe(writeStream);

function callback(StartDate){
    return () => console.log('Process durée : ' + (Date.now() - startDate) + 'ms');
}