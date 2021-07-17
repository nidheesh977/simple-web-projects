var square1 = null
var square2 = null
var click = 1
var player = "White"

var whitePiece = ['<img src="images/wp.png" alt="" height="50px">', '<img src="images/wr.png" alt="" height="50px">', '<img src="images/wn.png" alt="" height="50px">', '<img src="images/wb.png" alt="" height="50px">', '<img src="images/wq.png" alt="" height="50px">', '<img src="images/wk.png" alt="" height="50px">']

var blackPiece = ['<img src="images/bp.png" alt="" height="50px">', '<img src="images/br.png" alt="" height="50px">', '<img src="images/bn.png" alt="" height="50px">', '<img src="images/bb.png" alt="" height="50px">', '<img src="images/bq.png" alt="" height="50px">', '<img src="images/bk.png" alt="" height="50px">']


function clicked(selected){
    if (click == 1){
        square1 = document.getElementById(selected);
        if (square1.innerHTML != ""){
            checkPiece(square1)
        }
        if (square1.innerHTML != ""){
            square1.classList.add('selected');
            click += 1
            document.getElementById("error").innerHTML = ""
        }else{
            document.getElementById("error").innerHTML = "Please select a valid piece"
        }
        
    }

    else{
        square2 = document.getElementById(selected);
        if (square2.innerHTML == ""){
            square1.classList.remove('selected');
            click = 1

            move(square1, square2)
            document.getElementById("error").innerHTML = ""

        }else if(whitePiece.includes(square1.innerHTML.trim()) && blackPiece.includes(square2.innerHTML.trim())){
            square1.classList.remove('selected');
            click = 1

            move(square1, square2)
            document.getElementById("error").innerHTML = ""
        }else if(blackPiece.includes(square1.innerHTML.trim()) && whitePiece.includes(square2.innerHTML.trim())){
            square1.classList.remove('selected');
            click = 1

            move(square1, square2)
            document.getElementById("error").innerHTML = ""
        }else{
            document.getElementById('error').innerHTML = "Please select a valid Piece"
        }
        
    }
}

function move(square1, square2){
    if (square1.innerHTML.trim() == '<img src="images/wp.png" alt="" height="50px">'){
        square2.innerHTML = '<img src="images/wq.png" alt="" height="50px">';
        square1.innerHTML = ''
    }else if (square1.innerHTML.trim() == '<img src="images/bp.png" alt="" height="50px">'){
        square2.innerHTML = '<img src="images/bq.png" alt="" height="50px">';
        square1.innerHTML = ''
    }else{
        square2.innerHTML = square1.innerHTML;
        square1.innerHTML = ''
    }
    

    flipPlayer(player)
}

function flipPlayer(p){
    if (p == "White"){
        player = "Black"
        document.getElementById("player").innerHTML = player
    }
    else if (p == "Black"){
        player = "White"
        document.getElementById("player").innerHTML = player
    }
    
}

function checkPiece(piece){
    if (whitePiece.includes(piece.innerHTML.trim())){
        console.log("White Piece")
    }else{
        console.log("Black Piece")
    }
}