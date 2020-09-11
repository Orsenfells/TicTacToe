// factory function to create methods for the players
const Player = (name, move) => {
    const getName = () => name;
    const getMove = () => move;
    const isWinner = () => alert(`${name} is the Winner`)
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
    let winCombo = [
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    
    
    const checkWin = () => {
        for(let i = 0; i < winCombo.length; i++) {
            let check = [];
            for(let j = 0; j < 3; j++) {  
                if(board[winCombo[i][j]] === "X") { 
                    check.push(winCombo[i][j])
                } else {
                    check.push(false);
                    break
                }
            }
            if(!check.includes(false)) {
                return player1.isWinner();
            }
        }
    }

    const render = () => {
        board.forEach(function (val, index) {
            squares[index].textContent = val;
        })

        
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
        checkWin();
    }
    document.getElementById("board").addEventListener('click', handleTurn);
    return{checkWin}
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

