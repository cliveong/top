const gameBoard = () => {
    let firstPlayerTurn = true;
    let firstPlayerWinner = null;
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
                    checkDraw();
                    let winningArray = getWinner();
                    highlightWinner(winningArray);
                }
            }));

        let overlay = document.querySelector(".overlay");
        let congrats = document.querySelector(".inlineText")
        overlay.addEventListener("click", () => {
            overlay.style.display = "none";
            congrats.style.display = "none";
            congrats.innerHTML = "";
            restartBoard();
        });


    };

    //add cross or circle on given table cell
    const addCrossOrCircle = (cell, turn) => {
        let cellWidth = (cell.offsetWidth-120).toString();
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

    //update array of placed X and Os
    const updateGameState = (cell, turn) => {
        let index = parseInt((cell.className).slice(-1)-1);
        gameState[index] = turn;
    }

    //find the winner based on placed pieces (in game state)
    const getWinner = () => {
        //0 1 2 
        //3 4 5
        //6 7 8
        const row1 = [0,1,2];
        const row2 = [3,4,5];
        const row3 = [6,7,8];
        const col1 = [0,3,6];
        const col2 = [1,4,7];
        const col3 = [2,5,8];
        const diag1 = [0,4,8];
        const diag2 = [2,4,6];
        const winningCombo = [row1, row2, row3, col1, col2, col3, diag1, diag2];
        for(let i = 0; i < 8; i++) {
            if (gameState[winningCombo[i][0]] === 
                gameState[winningCombo[i][1]] &&
                gameState[winningCombo[i][1]] === 
                gameState[winningCombo[i][2]]) {
                    if (gameState[winningCombo[i][0]] === 1) {
                        firstPlayerWinner = true;
                        return winningCombo[i];
                    } else if (gameState[winningCombo[i][0]] === 2){
                        firstPlayerWinner = false;
                        return winningCombo[i];
                    }                 
                }
        }
        firstPlayerWinner = null;
        return null;
    }

    const highlightWinner = (winningArray) => {
        if (winningArray === null) {
            return;
        }
        let tempIndex = 0;
        let tableCells = document.querySelectorAll("td");
        
        tableCells.forEach(cell => {
                if (winningArray.includes(tempIndex)) {
                    let img = cell.firstChild;
                    console.log(img);
                    let imgWidth = (img.offsetWidth+80).toString();
                    img.style.width = imgWidth + "px";
                }
                tempIndex++;
            });

        let overlay = document.querySelector(".overlay");
        let congrats = document.querySelector(".inlineText")
        overlay.style.display = "block";
        congrats.style.display = "block";
        if (firstPlayerWinner) {
            congrats.innerHTML = "Player 1 wins!"
        } else {
            congrats.innerHTML = "Player 2 wins!"
        }
    }

    const restartBoard = () => {
        let cells = document.querySelectorAll("td");
        cells.forEach(cell => {
            while (cell.hasChildNodes()) {
                cell.removeChild(cell.firstChild);
            }
        });
        gameState = [0,0,0,0,0,0,0,0,0];
        firstPlayerTurn = true;
        firstPlayerWinner = null;
    }

    const checkDraw = () => {
        if (!(gameState.includes(0))) {
            let overlay = document.querySelector(".overlay");
            let congrats = document.querySelector(".inlineText")
            overlay.style.display = "block";
            congrats.style.display = "block";
            congrats.innerHTML = "It's a draw!"
        }
    }

    return {
        startGame, gameState
    };
}

const game = gameBoard();
game.startGame();
