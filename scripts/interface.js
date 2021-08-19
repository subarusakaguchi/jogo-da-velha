document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    });

    getNames()
    attScore()
})

function getNames() {
    let player1 = prompt('Qual o nome do Jogador 1?')
    playerName[0] = player1
    let player2 = prompt('Qual o nome do Jogador 2?')
    playerName[1] = player2
}

function attScore() {
    for (let i = 0; i < 3; i++) {
        let playerScreen = document.getElementById(`player${i}`)
        playerScreen.innerHTML = i == 2 ? `Empates: <strong>${wins[i]}</strong>` : `${playerName[i]} - Vitórias: <strong>${wins[i]}</strong>`
    }
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