var board = ['', '', '', '', '', '', '', '', '']
var player = 0
var symbols = ['o', 'x']
var playerName = ['', '']
var wins = [0, 0, 0]
var gameOver = false
let winStates = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function handleMove(position) {
    if(gameOver) {
        return
    }

    if (board[position] == ''){
        board[position] = symbols[player]

        gameOver = isWin()

        let draw = board.every((item) => {
            return item != ''
        })

        if (!gameOver){    
            player = player == 0? 1:0
        }

        if (!gameOver && draw) {
            return 'draw'
        }
    }

    return gameOver
}

function isWin() {
    for (let i = 0; i<winStates.length; i++) {
        let seq = winStates[i]
        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true
        }
    }

    return false
}

function resetRound() {
    board = ['', '', '', '', '', '', '', '', '']
    player = 0
    gameOver = false
    cleanSquares()
}