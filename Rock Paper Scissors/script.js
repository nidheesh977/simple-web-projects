var hum = "rock"
var com = "rock"
var humscore = 0
var comscore = 0

function rock() {
    document.querySelector("#human").innerHTML = '<img src="images/rock.jpg" alt="" height="200px" width="200px">'
    hum = "rock"
    computer()

}

function paper() {
    document.querySelector("#human").innerHTML = '<img src="images/paper.jpg" alt="" height="200px" width="200px">'
    hum = "paper"
    computer()
}


function scissors() {
    document.querySelector("#human").innerHTML = '<img src="images/scissors.jpg" alt="" height="200px" width="200px">'
    hum = "scissors"
    computer()
}

function computer() {
    var selector = Math.floor(Math.random() * 3) + 1
    if (selector === 1) {
        document.querySelector("#computer").innerHTML = '<img src="images/rock.jpg" alt="" height="200px" width="200px">'
        com = "rock"
    } else if (selector === 2) {
        document.querySelector("#computer").innerHTML = '<img src="images/paper.jpg" alt="" height="200px" width="200px">'
        com = "paper"
    } else {
        document.querySelector("#computer").innerHTML = '<img src="images/scissors.jpg" alt="" height="200px" width="200px">'
        com = "scissors"
    }
    score()
}

function score() {
    if (hum === "rock" && com === "scissors") {
        humscore++
    } else if (hum === "paper" && com === "rock") {
        humscore++
    } else if (hum === "scissors" && com === "paper") {
        humscore++
    } else if (com === "rock" && hum === "scissors") {
        comscore++
    } else if (com === "paper" && hum === "rock") {
        comscore++
    } else if (com === "scissors" && hum === "paper") {
        comscore++
    }


    document.querySelector("#humscore").innerHTML = `Score : ${humscore}`
    document.querySelector("#comscore").innerHTML = `Score : ${comscore}`
}