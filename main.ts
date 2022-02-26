input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showString("" + (number_1))
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(1000)
    basic.showString("" + (number_2 && number_1))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    number_2 += 1
    basic.showString("" + (number_2))
})
let number_2 = 0
let number_1 = 0
number_1 = 0
number_2 = 0
basic.forever(function () {
	
})
