const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < grid.length; i++) {
    let parent = document.getElementById('grid')
    let child = document.createElement('div')
    child.setAttribute('id', `cell${i}`)
    child.textContent = grid[i]
    parent.appendChild(child)
    grid.splice(`${i}`, 1, child.textContent);
    }
    return {
        displayGrid: function(){
            console.log(grid)
        },
        resetBoard: function(){
            let cells = document.querySelectorAll(`[id^="cell"]`)
            cells.forEach((cell) => {
                cell.textContent = ''})
                console.log(grid)
        },
        grid
        }
})()

gameBoard.displayGrid()

const displayController = (() => {
    let cells = document.querySelectorAll(`[id^="cell"]`)
    let player_one = 1
    //let myArray = Array.from(cells)
    function playerOne(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function() {
                if(cell.textContent == '' && player_one == 1){
                    cell.textContent = 'X'
                  //  gameBoard.grid.splice(cells[5], 1, 'X')
                    console.log(gameBoard.grid)
                    player_one = 0
                    console.log(cell)
                }else if (cell.textContent == '' && player_one == 0){
                    cell.textContent = 'O'
                    player_one = 1
                    console.log(gameBoard.grid)
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
    gameBoard.resetBoard()})