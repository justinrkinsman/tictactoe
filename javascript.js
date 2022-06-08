const gameBoard = (() => {
    let grid = [];
    grid.splice(0, 1, (document.getElementById('cell1')));
    grid.splice(1, 1, (document.getElementById('cell2')));
    grid.splice(2, 1, (document.getElementById('cell3')));
    grid.splice(3, 1, (document.getElementById('cell4')));
    grid.splice(4, 1, (document.getElementById('cell5')));
    grid.splice(5, 1, (document.getElementById('cell6')));
    grid.splice(6, 1, (document.getElementById('cell7')));
    grid.splice(7, 1, (document.getElementById('cell8')));
    grid.splice(8, 1, (document.getElementById('cell9')));
    return {
        displayGrid: function(){
            console.log(grid)
        }}
})()

gameBoard.displayGrid()

const player = (name, selection) => {
    const player1 = () => {
        let name = document.getElementById('playerOne').value
        console.log(name)
    }
    const player2 = () => {
        let name = document.getElementById('playerTwo').value
        console.log(name)
    }
    return {name, selection, player1, player2}
}

const player1 = player()
const player2 = player()

let btn1 = document.getElementById('submit1')
btn1.addEventListener('click', function(){
    player1.player1()})

let btn2 = document.getElementById('submit2')
btn2.addEventListener('click', function(){
    player2.player2()})