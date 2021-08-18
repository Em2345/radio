radio.onReceivedNumber(function (receivedNumber) {
    x = receivedNumber
    basic.showString("" + (receivedNumber))
})
let x = 0
radio.setGroup(2)
x = 0
basic.forever(function () {
    if (x == 1) {
        cuteBot.motors(40, 60)
    }
    if (x == 2) {
        cuteBot.motors(60, 40)
    }
    if (x == 3) {
        cuteBot.motors(-50, -50)
    }
})
