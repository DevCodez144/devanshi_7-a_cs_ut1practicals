let sum = 0
let n = 0
game.splash("All odd numbers from 1-20")
for (let n = 0; n <= 20; n++) {
    if (n % 2 == 1) {
        game.splash(n)
        sum += n
    }
}
game.splash("Sum of the numbers is: " + sum)
