var lhr = 0;
var lmin = 0;
var lsec = 0;
var rhr = 0;
var rmin = 0;
var rsec = 0;
var lpause = 0;
var rpause = 0;
var s = 0;
var player1 = 0
var player2 = 0

function lbalance() {

    if (lmin >= 60) {
        lhr++
        lmin = 0
    }
    if (lsec > 59) {
        lmin++
        lsec = 0
    }
    if (lhr > 0 && lmin < 0) {
        lmin = 59
        lhr--
    }
    if (lmin > 0 && lsec < 0) {
        lsec = 59
        lmin--
    }
}

function rbalance() {
    if (rmin >= 60) {
        rhr++
        rmin = 0
    }
    if (rsec > 59) {
        rmin++
        rsec = 0
    }
    if (rhr > 0 && rmin < 0) {
        rmin = 59
        rhr--
    }
    if (rmin > 0 && rsec < 0) {
        rsec = 59
        rmin--
    }
    if (rmin > 0 && rsec < 0) {
        rsec = 59
        rmin--
    }
}

function ltime() {
    if (lsec > 0 || lmin > 0 || lhr > 0) {
        lsec--
    }
    lstart()
}

function rtime() {
    if (rsec > 0 || rmin > 0 || rhr > 0) {
        rsec--
    }
    rstart()
}

function start() {
    document.getElementById("llight").style.backgroundColor = "yellow"
    document.getElementById("rlight").style.backgroundColor = "yellow"
    lhr = 0;
    lmin = 0;
    lsec = 0;
    rhr = 0;
    rmin = 0;
    rsec = 0;
    lpause = 0;
    rpause = 0;
    lstart()
    rstart()

}

function lstart() {
    timeout()
    lbalance()
    if (lmin < 0) {
        lmin = 0
    }
    if (lsec < 0) {
        lmin = 0
    }
    if (lsec < 10) {
        lsecond = "0" + lsec
    } else {
        lsecond = lsec
    }
    if (lmin < 10) {
        lminute = "0" + lmin
    } else {
        lminute = lmin
    }
    if (lhr < 10) {
        lhour = "0" + lhr
    } else {
        lhour = lhr
    }
    document.getElementById("display1").value = `${lhour}:${lminute}:${lsecond}`
}

function rstart() {
    timeout()
    rbalance()
    if (rmin < 0) {
        rmin = 0
    }
    if (rsec < 0) {
        rmin = 0
    }
    if (rsec < 10) {
        rsecond = "0" + rsec
    } else {
        rsecond = rsec
    }
    if (rmin < 10) {
        rminute = "0" + rmin
    } else {
        rminute = rmin
    }
    if (rhr < 10) {
        rhour = "0" + rhr
    } else {
        rhour = hr
    }
    document.getElementById("display2").value = `${rhour}:${rminute}:${rsecond}`
}

function btn1() {
    rpause = window.setInterval(rtime, 1000)
    document.getElementById("llight").style.backgroundColor = "grey"
    document.getElementById("rlight").style.backgroundColor = "yellow"
    document.getElementById("btn1").style.pointerEvents = "none"
    document.getElementById("btn2").style.pointerEvents = "all"
    lstop()

}

function btn2() {
    lpause = window.setInterval(ltime, 1000)
    document.getElementById("rlight").style.backgroundColor = "grey"
    document.getElementById("llight").style.backgroundColor = "yellow"
    document.getElementById("btn2").style.pointerEvents = "none"
    document.getElementById("btn1").style.pointerEvents = "all"
    rstop()
}

function add5() {

    lmin += 5
    rmin += 5
    lstart()
    rstart()
}

function sub5() {
    if (lmin > 0 || hr > 0) {
        lmin -= 5
        lstart()
        rstart()
    }
    if (rmin > 0 || hr > 0) {
        rmin -= 5
        lstart()
        rstart()
    }
}

function add1() {

    lmin++
    rmin++
    lstart()
    rstart()
}

function sub1() {
    if (lmin > 0 || lhr > 0) {
        lmin--
    }
    if (rmin > 0 || rhr > 0) {
        rmin--
    }
    rstart()
    lstart()
}

function lstop() {
    window.clearTimeout(lpause);
}

function rstop() {
    window.clearTimeout(rpause);
}

function timeout() {
    if (lhr == 0 && lmin == 0 && lsec == 0) {
        window.clearTimeout(lpause);
        window.clearTimeout(rpause);
        player2++
        if (player2 == 3) {
            gameOver()
        }
    }
    if (rhr == 0 && rmin == 0 && rsec == 0) {
        window.clearTimeout(lpause);
        window.clearTimeout(rpause);
        player1++
        if (player1 == 3) {
            gameOver()
        }
    }
}

function gameOver() {
    document.getElementById
}