function beforeExitCallback(code){
    console.log('About to exit ! ' + code);
}

process.on('exit', beforeExitCallback);

console.log('starting');