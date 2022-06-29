const gameBoard = () => {
    let firstPlayerTurn = true;
    let gameState = [0,0,0,0,0,0,0,0,0];

    const getTurn = () => firstPlayerTurn;
    const changeTurn = () => {
        firstPlayerTurn = !firstPlayerTurn;
    };

    const startGame = () => {
        let tableCells = document.querySelectorAll("td");
        tableCells.forEach(cell => 
            cell.addEventListener("click", () => {
                if (!(cell.hasChildNodes())) {
                    if(getTurn()) {
                        addCrossOrCircle(cell, 1);
                        updateGameState(cell ,1);

                    } else {
                        addCrossOrCircle(cell, 2);
                        updateGameState(cell ,2);
                    }
                    changeTurn();
                }
            }));
    };

    const addCrossOrCircle = (cell, turn) => {
        let cellWidth = (cell.offsetWidth-50).toString();
        if (turn === 1) {
            let cross = document.createElement("IMG");
            cross.src = "./images/close-trimmy.png";
            cross.style.width = cellWidth + "px";
            cell.appendChild(cross);
        } else {
            let circle = document.createElement("IMG");
            circle.src = "./images/letter-o-trimmy.png";
            circle.style.width = cellWidth + "px";
            cell.appendChild(circle);
        }
    }

    const updateGameState = (cell, turn) => {
        let index = parseInt((cell.className).slice(-1)-1);
        gameState[index] = turn;
        console.log(gameState);
    }

    const getWinner = () => {
        //0 1 2 
        //3 4 5
        //6 7 8
        if (
            (gameState[0] === gameState[1] === gameState[2] && gameState[0] === 1) ||
            (gameState[3] === gameState[4] === gameState[5] && gameState[0] === 1) ||
            (gameState[6] === gameState[7] === gameState[8] && gameState[0] === 1) ||
            (gameState[0] === gameState[3] === gameState[6] && gameState[0] === 1) ||
            (gameState[1] === gameState[4] === gameState[7] && gameState[0] === 1) ||
            (gameState[2] === gameState[5] === gameState[8] && gameState[0] === 1) ||
            (gameState[0] === gameState[4] === gameState[8] && gameState[0] === 1) ||
            (gameState[2] === gameState[4] === gameState[6] && gameState[0] === 1)
        ) {
            return 0;
        } else if (
            (gameState[0] === gameState[1] === gameState[2] && gameState[0] === 2) ||
            (gameState[3] === gameState[4] === gameState[5] && gameState[0] === 2) ||
            (gameState[6] === gameState[7] === gameState[8] && gameState[0] === 2) ||
            (gameState[0] === gameState[3] === gameState[6] && gameState[0] === 2) ||
            (gameState[1] === gameState[4] === gameState[7] && gameState[0] === 2) ||
            (gameState[2] === gameState[5] === gameState[8] && gameState[0] === 2) ||
            (gameState[0] === gameState[4] === gameState[8] && gameState[0] === 2) ||
            (gameState[2] === gameState[4] === gameState[6] && gameState[0] === 2)
        ) {
            
        }
    }

    return {
        startGame,
        gameState
    };
}

const game = gameBoard();
game.startGame();
