const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < 9; i++) {
    let parent = document.getElementById('grid')
    let child = document.createElement('div')
    child.setAttribute('id', 'cell')
    parent.appendChild(child)
    grid.splice(`${i}`, 1, parent.appendChild(child));
    }
    return {
        displayGrid: function(){
            console.log(grid)
        }}
})()

gameBoard.displayGrid()


/*const displayController = (() => {
    const playerOne = () => {
        let cells = document.querySelectorAll(`[id="cell"]`)
        cells.forEach((cell) => {
            cell.addEventListener('click', function() {
                if(cell.textContent == ''){
                    cell.textContent = 'X'
                }else if (!(cell.textContent == '')){
                    cell.textContent = cell.textContent
                }
            })
        })
    }
        let cells = document.querySelectorAll(`[id="cell"]`)
        cells.forEach((cell) => {
            cell.addEventListener('click', function() {
                if (cell.textContent == ''){
                    cell.textContent = 'X'
                }else if (!(cell.textContent == '')){
                    cell.textContent = cell.textContent
                }
        })
    const playerTwo = () => {
        let cell
    }
    return{playerOne, playerTwo}
})})()*/

const displayController = (() => {
    let cells = document.querySelectorAll(`[id="cell"]`)
    function playerOne(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function() {
                if(cell.textContent == ''){
                    cell.textContent = 'X'
                }else if (!(cell.textContent == '')){
                    cell.textContent = cell.textContent
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