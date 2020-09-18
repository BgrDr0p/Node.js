function dosync() {
    let data = getUser_sync();
    console.log(data);
    console.log("Disponible");
}

function getUser_sync() {

    const timeout = Date.now() + 2000;
    while (Date.now() < timeout) {};
    return"BrgDroP";
}

function doasync() {

    getUser_async((data) => console.log(data));
    console.log("Disponible");
}

function getUser_async(callback) {

    setTimeout(() => callback('BgrDr0p'), 2000);
}

dosync();
console.log('-----------')
doasync();