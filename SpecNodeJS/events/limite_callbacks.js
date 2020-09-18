function timer(callback1, callback2, callback3) {

    setTimeout(callback1,1000);
    setTimeout(callback2,2000);
    setTimeout(callback3,3000);

}

exports.timer = timer;