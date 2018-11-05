const chess = document.getElementById('chess');
let context = chess.getContext('2d');
let me = true;
let checkBoard = [];

let initCheckChessBoard = () => {
    for(let i = 0; i < 15; i ++) {
        checkBoard[i] = [];
        for(let j = 0; j < 15; j ++) {
            checkBoard[i][j] = 0;
        }
    }
}

let drawChessBoard = () => {
    context.strokeStyle = '#BFBFBF';
    for(let i = 0; i < 15; i ++) {
        // draw x axis
        context.moveTo(15 + 30*i, 15);
        context.lineTo(15 + 30*i, 435);
        context.stroke();
    
        // draw y axis
        context.moveTo(15, 15 + 30*i);
        context.lineTo(435, 15 + 30*i);
        context.stroke();
    }
}

let oneStep = (i, j, me) => {
    context.beginPath();
    context.arc(15 + 30 * i, 15 + 30 * j, 13, 0, 2 * Math.PI);
    context.closePath();
    let gradient = context.createRadialGradient(15 + 30 * i + 2, 15 + 30 * j - 2, 13, 15 + 30 * i + 2, 15 + 30 * j - 2, 0)
    if(me) {
        gradient.addColorStop(0, '#0A0A0A');
        gradient.addColorStop(1, '#636766');
    } else {
        gradient.addColorStop(0, '#D1D1D1');
        gradient.addColorStop(1, '#F9F9F9');
    }
    context.fillStyle = gradient;
    context.fill();
}

chess.onclick = e => {
    let x = e.offsetX,
        y = e.offsetY,
        i = Math.floor(x / 30),
        j = Math.floor(y / 30);

    if(checkBoard[i][j] === 0) {
        checkBoard[i][j] = 1;
        oneStep(i, j, me);
        me = !me;
    }
}

initCheckChessBoard();
drawChessBoard();
