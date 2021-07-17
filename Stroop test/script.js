var words = ["RED", "GREEN", "BLUE", "Yellow"]
var colors = ["green", "blue", "red", "orange"]
var score = 0
var time = 100
var pause = 0


function number() {
    col = Math.floor(Math.random() * 4)
    word = Math.floor(Math.random() * 4)

}


function point() {
    document.querySelector("#score").innerHTML = `SCORE:${score}`
}

function timeing() {
    if (time > 0) {
        time--

    } else if (time == 0) {
        gmover()
    }
    document.querySelector("#time").innerHTML = `TIME :${time}`
}

function red() {
    if (document.getElementById("word").style.color == "red") {
        score++
    } else {
        score--
    }
    game()
    point()
}

function green() {
    if (document.getElementById("word").style.color == "green") {
        score++
    } else {
        score--
    }
    game()
    point()
}

function blue() {
    if (document.getElementById("word").style.color == "blue") {
        score++
    } else {
        score--
    }
    game()
    point()
}

function orange() {
    if (document.getElementById("word").style.color == "orange") {
        score++
    } else {
        score--
    }
    game()
    point()
}

function start() {

    window.setInterval(timeing, 1000)
    document.querySelector("#score").innerHTML = `SCORE:${score}`
    document.querySelector("#time").innerHTML = `TIME :${time}`
    document.querySelector(".btns").style.visibility = "visible"
    document.querySelector("#start").style.visibility = "hidden"
    game()

}

function game() {
    number()
    document.getElementById("word").innerHTML = words[word]
    document.getElementById("word").style.color = colors[col]
}

function gmover() {
    document.querySelector('body').style.pointerEvents = 'none'
}