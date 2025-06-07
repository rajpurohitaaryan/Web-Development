let a = Math.random()
function adjactive() {
    if (a < 0.33) {
        return ("Crazy")
    }
    else if (a < 0.66 && a > 0.33) {
        return ("Amazing")
    }
    else {
        return ("Fire")
    }
}

let b = Math.random()

function shop() {
    if (b < 0.33) {
        return ("Engine")
    }
    else if (b < 0.66 && b > 0.33) {
        return ("Food")
    }
    else {
        return ("Garments")
    }
}
let c = Math.random()
function another_word() {
    if (c < 0.33) {
        return ("Bros")
    }
    else if (c < 0.66 && c > 0.33) {
        return ("Limited")
    }
    else {
        return ("Hub")
    }
}
let x = adjactive()
let y = shop()
let z = another_word()

let d =  x +  y +  z 
console.log("Your Name is "+ d)
