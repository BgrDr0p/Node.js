const exemple = require('./events/Event_emitter');

exemple.timer.on('3 secondes', () => console.log('3 secondes'));

exemple.launch();
