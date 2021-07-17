var s = 0
var m = 0
var h = 90

function start() {

    document.querySelector(".sec").style.transform = `rotate(${s}deg)`
    s += 6
    document.querySelector(".min").style.transform = `rotate(${m}deg)`
    m += 0.1
    document.querySelector(".hr").style.transform = `rotate(${h}deg)`
    h += 0.1 / 12
}

var time = window.setInterval(start, 1000)