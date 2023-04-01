let distance = 0
servos.P0.setAngle(180)
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P8,
    DigitalPin.P12,
    PingUnit.MicroSeconds
    )
    basic.showString("" + (distance))
    if (distance < 30) {
    	
    } else {
    	
    }
})
