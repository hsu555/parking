let distance = 0
cuteBot.setServo(cuteBot.ServoList.S1, 90)
basic.forever(function () {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.showString("" + (distance))
    if (distance < 40) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        cuteBot.setServo(cuteBot.ServoList.S1, 90)
    } else {
        cuteBot.setServo(cuteBot.ServoList.S1, 180)
        cuteBot.closeheadlights()
    }
})
