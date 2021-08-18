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
    for (let i = 0; i < 2; i++) {
        let playerScreen = document.getElementById(`player${i}`)
        playerScreen.innerHTML = `${playerName[i]} - Vitórias: <strong>${wins[i]}</strong>`
    }
}

function handleClick(event) {
    let square = event.target
    let position = square.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert(`O vencedor desta partida foi: ${playerName[player]}`)
            wins[player] = ++wins[player]
            attScore()
            resetRound()
        }, 10)
    }

    updateSquare(position)
}

function updateSquare(position) {
    let square = document.getElementById(position.toString())
    let symbol = board[position]

    square.innerHTML = `<div class="${symbol}"></div>`
}