![tictactoe1](https://user-images.githubusercontent.com/50173813/130359857-3b72a999-2a77-4510-bcb1-1b8186ef3e6d.png)
# The Old Lady Game
 Jogo da velha (Tic tac toe) feito com HTML5, CSS3 e JavaScript, o projeto cria dois jogadores que interagem por meio das regras normais do game. Os players podem realizar várias **Rodadas** até que alguém decida por terminar a partida sendo nomeado um vencedor ou um empate técnico.
 
# Funcionamento
O jogo funciona a partir da verificação de estados pré-selecionados de vitórias na forma de uma matriz com os resultados:
```
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
```
Assim que uma vitória é confirmada uma ```Alert()``` confirma o vencedor da **Rodada**:

![tictactoe2](https://user-images.githubusercontent.com/50173813/130360070-3a6f0332-8c15-4188-a4eb-ee10c8f11e50.png)

A qualquer momento o botão **Terminar Partida** pode ser clickado, finalizando uma série de rodada, determinando um vencedor ou um empate:

![tictactoe3](https://user-images.githubusercontent.com/50173813/130360322-3c62b0d0-23b4-4a5d-a067-b0521fb45d5f.png)

![tictactoe4](https://user-images.githubusercontent.com/50173813/130360324-05afc5e0-ce5c-4f5e-9539-07af8a99e930.png)

![tictactoe5](https://user-images.githubusercontent.com/50173813/130360326-49c35043-dc1d-44ab-b26c-d95d48cb8e1b.png)


