let 거리 = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    거리 = pins.pulseIn(DigitalPin.P1, PulseValue.High) / 40
    basic.showNumber(거리)
})
