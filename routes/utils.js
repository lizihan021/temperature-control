var gpio = require('rpi-gpio');

var startButton = 7;
var timerButton = 11;

function pressButton(buttonNumber) {
    gpio.setup(buttonNumber, gpio.DIR_OUT, write);
    
    function write(err) {
        if (err) throw err;
        gpio.write(buttonNumber, true, function(err) {
            if (err) throw err;
            sleep(100).then(() => {
                gpio.write(buttonNumber, false, function(err) {
                    if (err) throw err;
                    sleep(100).then(() => {
                        gpio.write(buttonNumber, true, function(err) {
                            if (err) throw err;
                            console.log('Written to pin');
                        });
                    });
                });
            });
        });
    }
}

module.exports = {
    // return 1 if success, otherwise return 0
    start: function () {
        pressButton(startButton)
        return 1;
    },

    stop: function () {
        return start()
    },

    // return 1 if success, otherwise return 0
    timer: function () {
        pressButton(timerButton)
        return 1;
    },

    tempPlus: function () {
        return 1
    },

    tempMinus: function () {
        return 1
    },

    mode: function () {
        return 1
    },

    sleep: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}