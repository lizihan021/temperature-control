var gpio = require('rpi-gpio');

var startButton = 7;
var timerButton = 11;

function pressButton(buttonNumber) {
    gpio.setup(buttonNumber, gpio.DIR_OUT, write);
    
    function write(err) {
        if (err) throw err;
        gpio.write(buttonNumber, false, function(err) {
            if (err) throw err;
            console.log('Written to pin');
        });
    }
}

// return 1 if success, otherwise return 0
function start() {
    pressButton(startButton)
    return 1;
}

function stop() {
    return start()
}

// return 1 if success, otherwise return 0
function timer() {
    pressButton(timerButton)
    return 1;
}

function tempPlus() {
    return 1
}

function tempMinus() {
    return 1
}

function mode() {
    return 1
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

export {start, timer, sleep}