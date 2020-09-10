// factory function to create methods for the players
const Player = (name, move) => {
    const getName = () => name;
    const getMove = () => move;
    const isWinner = () => `${name} is the Winner`
    const newName = (newName) => name = newName;

    return {getName, getMove, isWinner, newName};
 }

const player1 = Player('mike', "X");
const player2 = Player("kirk", "O");

let gameBoard = (() => {
    const squares = Array.from(document.querySelectorAll(".box"))
    let turn = player1.getMove();
    let board = [
        '','','',
        '','','',
        '','',''
    ];
    
    const render = () => {
        board.forEach(function (val, index) {
            squares[index].textContent = val
        })
        console.log(board);
    }
    const checkWinner = () => {

    }
    const occupiedCell = (i) => {
        return board[i] != '';
    }
    const handleTurn = (event) => {
        
        let idx = squares.findIndex(function(square) {
            return square === event.target;
        })
        
        if(occupiedCell(idx)) return;
        
        board[idx] = turn;
        turn = turn === player1.getMove() ? player2.getMove() : player1.getMove();
        render();
    }
    document.getElementById("board").addEventListener('click', handleTurn);
    
})()

let displayController = (() => {
    //Dom cache I guess
    const playerOneButton = document.getElementById('playerOne');
    const playerTwoButton = document.getElementById('playerTwo');
    const resetButton = document.getElementById('newGame');
   
    playerOneButton.addEventListener('click', () => { playerOneButton.textContent = player1.newName(prompt()); })
    playerTwoButton.addEventListener('click', () => { playerTwoButton.textContent = player2.newName(prompt()); })


})()

let gameFlow = (() => {
    
})()

