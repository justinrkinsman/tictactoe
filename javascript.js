const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    return {
        displayGrid: function(){
            console.log(grid)
        },
        resetBoard: function(){
            let cells = document.querySelectorAll(`[id^="cell"]`)
            cells.forEach((cell) => {
                cell.textContent = ''
                grid = ['','','','','','','','','']})
                console.log(grid)
        },
        grid,
        setCell: function(index, value){
            let cells = document.querySelectorAll(`[id^="cell"]`)
            cells.forEach((cell) => {
                cell.textContent = value
                index = grid.index
        })
        },
        board: function(){
            for (let i = 0; i < grid.length; i++) {
                let parent = document.getElementById('grid')
                let child = document.createElement('div')
                child.setAttribute('id', `cell${i}`)
                child.textContent = grid[i]
                parent.appendChild(child)
                grid.splice(`${i}`, 1, child.textContent);                    
            }
        }
}})()

gameBoard.board()

const displayController = (() => {
    let cells = document.querySelectorAll(`[id^="cell"]`)
    let player_one = 1
    gameBoard.grid
    //let myArray = Array.from(cells)
    function playerOne(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function(e) {
                if(cell.textContent == '' && player_one == 1){
                    //cell.textContent = 'X'
                    //gameBoard.setCell(grid[cell.id.slice(-1)], 'X')
                    gameBoard.grid.splice(cell.id.slice(-1), 1, 'X')
                    player_one = 0
                    console.log(gameBoard.grid)
                //    console.log(gameBoard.grid.indexOf(gameBoard.grid[cell.id.slice(-1)]))
                    console.log(e.target.id.slice(-1))
                }else if (cell.textContent == '' && player_one == 0){
                    //cell.textContent = 'O'
                  //  gameBoard.setCell(grid[cell.id.slice(-1)], 'O')    
                    gameBoard.grid.splice(cell.id.slice(-1), 1, 'O')
                    player_one = 1
                    console.log(gameBoard.grid)
                 //   console.log(gameBoard.grid.indexOf(gameBoard.grid[cell.id.slice(-1)]))
                    console.log(e.target.id.slice(-1))
                }
            })
        })
    }
    function playerTwo(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function() {
                if(cell.textContent == ''){
                    cell.textContent = 'O'
                }else if (!(cell.textContent == '')){
                    cell.textContent = cell.textContent
                }
            })
        })
}
    return {playerOne, playerTwo}
})()

displayController.playerOne()

const player = () => {
    const playerOne = () => {
        let name = document.getElementById('playerOne').value
        return{name}
    }
    const playerTwo = () => {
        let name = document.getElementById('playerTwo').value
        return{name}
    }
    return {playerOne, playerTwo}
}

const player1 = player()
const player2 = player()

let btn1 = document.getElementById('submit1')
btn1.addEventListener('click', function(){
    console.log(player1.playerOne())})

let btn2 = document.getElementById('submit2')
btn2.addEventListener('click', function(){
    console.log(player2.playerTwo())})

let resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', function(){
    gameBoard.resetBoard()
gameBoard.grid = ['','','','','','','','', '']
}
    )