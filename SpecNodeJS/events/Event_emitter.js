const event = require('events');

timer = new event();

function launch() {
    setTimeout(() => timer.emit('1 secondes'), 1000);
    setTimeout(() => timer.emit('2 secondes'), 2000);
    setTimeout(() => timer.emit('3 secondes'), 3000);
}

exports.timer = timer;
exports.launch = launch;