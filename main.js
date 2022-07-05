let gameDiv = document.querySelector('.game-body');


const createPlayer = (name, letter) => {
    const playerName = name;
    const playerLetter = letter;
    return {playerName, playerLetter};
};
let ourplayer = createPlayer('adrian', 'x');
let compooter = createPlayer('compoot', 'o');
let playerTurn = true;

const gameBoard = (() => {
    let boardArray = [];
    return {boardArray};
})();

function renderGame() {
    for (let i = 0; i < 9; i++) {
        let gameSquare = document.createElement('button');
        gameSquare.classList.add('square');
        gameSquare.classList.add(`${i}`);
        gameSquare.addEventListener('click', () => {
            if (!gameSquare.textContent) {
                if (playerTurn === true) {
                    gameSquare.classList.add('player-color');
                    gameSquare.classList.remove('computer-color');
                    gameSquare.textContent = `${ourplayer.playerLetter}`;
                    playerTurn = false;
                }
                else if (playerTurn === false) {
                    gameSquare.classList.add('computer-color');
                    gameSquare.classList.remove('player-color');
                    gameSquare.textContent = `${compooter.playerLetter}`;
                    playerTurn = true;
                }
                checkForWin(gameBoard.boardArray);
            }
        });
        gameDiv.append(gameSquare);
        gameBoard.boardArray.push(gameSquare);
    }
}

function isSameLetter(one, two, three) {
    if ((one === 'x' && two === 'x' && three === 'x') || (one === 'o' && two === 'o' && three === 'o')) {return true;}
    else {return false;}
}

function checkForWin(board) {
    if (isSameLetter(board[0].textContent, board[1].textContent, board[2].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[3].textContent, board[4].textContent, board[5].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[6].textContent, board[7].textContent, board[8].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[0].textContent, board[3].textContent, board[6].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[1].textContent, board[4].textContent, board[7].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[2].textContent, board[5].textContent, board[8].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[0].textContent, board[4].textContent, board[8].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
    else if (isSameLetter(board[2].textContent, board[4].textContent, board[6].textContent)) {
        playerTurn ? alert('Player 1 wins!') : alert('Player 2 wins!');
        newGame();
    }
}

function newGame() {
    while(gameDiv.firstChild) {
        gameDiv.firstChild.remove();
    }
    gameBoard.boardArray = [];
    renderGame();
}

document.querySelector('.new-game-btn').addEventListener('click', () => newGame(), false);

renderGame();


