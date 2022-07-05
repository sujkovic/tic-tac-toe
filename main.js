let gameDiv = document.querySelector('.game-body');
let gameOver = false;


const createPlayer = (name, letter) => {
    const playerName = name;
    const playerLetter = letter;
    return {playerName, playerLetter};
};

const gameBoard = (() => {
    let boardArray = [];
    return {boardArray};
})();

const gameLogic = (() => {
    const renderGame = () => {
        gameOver = false;
        for (let i = 0; i < 9; i++) {
            let gameSquare = document.createElement('button');
            gameSquare.classList.add('square');
            gameSquare.classList.add(`${i}`);
            gameSquare.addEventListener('click', () => {
                if (!gameSquare.textContent && !gameOver) {
                    if (playerTurn === true) {
                        gameSquare.classList.add('player-color');
                        gameSquare.classList.remove('computer-color');
                        gameSquare.textContent = `${playerOne.playerLetter}`;
                        playerTurn = false;
                    }
                    else if (playerTurn === false) {
                        gameSquare.classList.add('computer-color');
                        gameSquare.classList.remove('player-color');
                        gameSquare.textContent = `${playerTwo.playerLetter}`;
                        playerTurn = true;
                    }
                    checkForWin(gameBoard.boardArray);
                }
            });
            gameDiv.append(gameSquare);
            gameBoard.boardArray.push(gameSquare);
        }
    }
    const isSameLetter = (one, two, three) => {
        if ((one === 'x' && two === 'x' && three === 'x') || (one === 'o' && two === 'o' && three === 'o')) {return true;}
        else {return false;}
    }
    const checkForWin = (board) => {
        if (isSameLetter(board[0].textContent, board[1].textContent, board[2].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[3].textContent, board[4].textContent, board[5].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[6].textContent, board[7].textContent, board[8].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[0].textContent, board[3].textContent, board[6].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[1].textContent, board[4].textContent, board[7].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[2].textContent, board[5].textContent, board[8].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[0].textContent, board[4].textContent, board[8].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
        else if (isSameLetter(board[2].textContent, board[4].textContent, board[6].textContent)) {
            playerTurn ? alert(`${playerOne.playerName} wins!`) : alert(`${playerTwo.playerName} wins!`);
            gameOver = true;
        }
    }
    const newGame = () => {
        while(gameDiv.firstChild) {
            gameDiv.firstChild.remove();
        }
        gameBoard.boardArray = [];
        renderGame();
    }
    return {renderGame, isSameLetter, checkForWin, newGame};
})();

let playerOne = createPlayer('', 'x');
let playerTwo = createPlayer('', 'o');
let playerTurn = true;

document.querySelector('.start-game-btn').addEventListener('click', () => {
    playerOne.playerName = document.querySelector('#player1').value;
    playerTwo.playerName = document.querySelector('#player2').value;
    gameLogic.newGame();
});
