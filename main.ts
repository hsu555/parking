let distance = 0
cuteBot.setServo(cuteBot.ServoList.S1, 90)
basic.forever(function () {
    distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (distance >= 2 && distance <= 30) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        cuteBot.setServo(cuteBot.ServoList.S1, 0)
    } else {
        cuteBot.setServo(cuteBot.ServoList.S1, 90)
        cuteBot.closeheadlights()
    }
    basic.showString("" + (distance))
    basic.pause(1000)
})
