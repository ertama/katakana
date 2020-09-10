let うらない = 0
input.onButtonPressed(Button.A, function () {
    うらない = randint(0, 3)
    if (うらない == 0) {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    } else if (うらない == 1) {
        basic.showIcon(IconNames.SmallHeart)
        katakana.showString("ﾁｭｳｷﾁ")
    } else if (うらない == 2) {
        basic.showIcon(IconNames.Asleep)
        katakana.showString("ｼｮｳｷﾁ")
    } else {
        basic.showIcon(IconNames.Angry)
        music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    }
})
basic.forever(function () {
	
})
