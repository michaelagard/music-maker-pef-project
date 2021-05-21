input.onButtonPressed(Button.A, function () {
    dfplayermini.playLoopAllFiles()
})
input.onButtonPressed(Button.B, function () {
    dfplayermini.playFile(1, dfplayermini.isRepeat.No)
})
dfplayermini.connect(SerialPin.P0, SerialPin.P1)
basic.forever(function () {
	
})