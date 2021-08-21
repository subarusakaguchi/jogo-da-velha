document.addEventListener('DOMContentLoaded', () => {
    let gameData = JSON.parse(localStorage.getItem('gameData'))
    if (gameData == undefined || gameData == null) {
        getNames()
        start()
    } else {
        saveGame = gameData
        for (let i = 0; i < 2; i++) {
            wins[i] = saveGame[`win${i}`]
            playerName[i] = saveGame[`player${i}`]
        }
        wins[2] = saveGame.empates
        start()
    }
})

function start() {
    let squares = document.querySelectorAll('.square')

        squares.forEach((square) => {
            square.addEventListener('click', handleClick)
        });

        attScore()
}

function getNames() {
    let player1 = ''
    while (player1 == null || player1 == undefined || player1 == '') {
        player1 = prompt('Qual o nome do Jogador 1?')
    }
    playerName[0] = player1
    let player2 = ''
    while (player2 == null || player2 == undefined || player2 == '') {
        player2 = prompt('Qual o nome do Jogador 2?')
    }
    playerName[1] = player2
    for (let i = 0; i < 2; i++) {
        saveGame[`player${i}`] = playerName[i]
    }
}

function attScore() {
    for (let i = 0; i < 3; i++) {
        let playerScreen = document.getElementById(`player${i}`)
        playerScreen.innerHTML = i == 2 ? `Empates: <strong>${wins[i]}</strong>` : `${playerName[i]} - Vitórias: <strong>${wins[i]}</strong>`
    }
    saveGame.win0 = wins[0]
    saveGame.win1 = wins[1]
    saveGame.empates = wins[2]
    localStorage.setItem('gameData', JSON.stringify(saveGame))
}

function handleClick(event) {
    let square = event.target
    let position = square.id
    let res = handleMove(position)

    if (res === 'draw') {
        result('Empate!')
    }

    if (res === true){
        result(`O vencedor desta partida foi: ${playerName[player]}`)
    }

    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]

    square.innerHTML = `<div class="${symbol}"></div>`
}

function cleanSquares() {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.innerHTML = ''
    })
}