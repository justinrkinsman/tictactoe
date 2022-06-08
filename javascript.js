/*document.addEventListener('click', function(e){
    gameBoard
    if(e.target.textContent == ''){
        e.target.value = 'X'
        let newGrid = gameBoard.grid
        newGrid.splice(((e.target.id.slice(-1))-1), 1, 'X')
        console.log(newGrid)
    }
       playerTwo()
    }
)*/

const gameBoard = (() => {
    let grid = []
    grid.splice(0, 1, (document.getElementById('cell1')));
    grid.splice(1, 1, (document.getElementById('cell2')));
    grid.splice(2, 1, (document.getElementById('cell3')));
    grid.splice(3, 1, (document.getElementById('cell4')));
    grid.splice(4, 1, (document.getElementById('cell5')));
    grid.splice(5, 1, (document.getElementById('cell6')));
    grid.splice(6, 1, (document.getElementById('cell7')));
    grid.splice(7, 1, (document.getElementById('cell8')));
    grid.splice(8, 1, (document.getElementById('cell9')));
    return {grid}
})()

const player = (name, selection) => {
    const sayHello = () => console.log(`My name is ${name} and I choose ${selection}`)
    return {name, selection, sayHello}
}

function playerTwo() {
document.addEventListener('click', function(e){
    if(e.target.textContent == ''){
        e.target.value = 'O'
        let newGrid = gameBoard.grid
        newGrid.splice(((e.target.id.slice(-1))-1), 1, 'O')
    }
    playerOne()
})}

function playerOne() {
document.addEventListener('click', function(e){
    if(e.target.textContent == ''){
        e.target.value = 'X'
        let newGrid = gameBoard.grid
        newGrid.splice(((e.target.id.slice(-1))-1), 1, 'X')
       playerTwo()
    }
})
}

playerOne()