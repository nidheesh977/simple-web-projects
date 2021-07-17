var min = 0;
var sec = 0;
var msec = 0;
var pause = 0;

function msg() {
    document.getElementById("display").value = min + ":" + sec + ":" + msec;
    msec++;
    if (msec == 10) {
        sec++;
        msec = 0;
    }
    if (sec == 60) {
        min++;
        sec = 0;
    }
}

function restart() {
    min = 0;
    sec = 0;
    msec = 0;
    document.getElementById("display").value = min + ":" + sec + ":" + msec;
    document.getElementById("btn1").style.pointerEvents = "all"
}

function start() {
    pause = window.setInterval(msg, 100);
    document.getElementById("btn1").style.pointerEvents = "none"
}

function stop() {
    window.clearTimeout(pause);
    document.getElementById("btn1").style.pointerEvents = "all"
}