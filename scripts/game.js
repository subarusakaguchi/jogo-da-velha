var board = ['', '', '', '', '', '', '', '', '']
var player = 0
var symbols = ['o', 'x']
var playerName = ['', '']
var wins = [0, 0, 0]
var gameOver = false
var saveGame = {
    player0:'', 
    player1:'', 
    win0:0, 
    win1:0, 
    empates:0
}
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

function result(msg) {
    setTimeout(() => {
        alert(msg)
        if (msg === 'Empate!') {
            wins[2] = ++wins[2]
            attScore()
            resetRound()
        } else {
            wins[player] = ++wins[player]
            attScore()
            resetRound()
        }
    }, 10)
}

function resetRound() {
    board = ['', '', '', '', '', '', '', '', '']
    player = 0
    gameOver = false
    cleanSquares()
}

function resetGame() {
    let verify = confirm('A partida será terminada, os pontos zerados, um vencedor declado e uma nova partida iniciada. Deseja continuar?')
    if (verify) {
        let winner = isWinner()
        if (winner === 'Empate!') {
            alert(`O resultado foi um empate! com ${wins[0]} vitórias cada`)
        } else {
            alert(`O vencedor foi o(a) jogador(a) ${playerName[winner]} com ${wins[winner]} vitórias! em um total de ${wins.reduce((a, b) => a + b, 0)} partidas!`)
        }
        localStorage.clear()
        wins = [0, 0, 0]
        playerName = ['', '']
        resetRound()
        getNames()
        start()
    }
}

function isWinner() {
    if (wins[0] > wins[1]) {
        return 0
    } else if (wins[1] > wins[0]) {
        return 1
    } else {
        return 'Empate!'
    }
}