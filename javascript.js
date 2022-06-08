const gameBoard = (() => {
    let grid = [];
    for (let i = 1; i < 10; i++)
    grid.push(document.getElementById(`cell${i}`));
    return {
        displayGrid: function(){
            console.log(grid)
        }}
})()

const displayController = (() => {
    
})

gameBoard.displayGrid()

const player = () => {
    const player1 = () => {
        let name = document.getElementById('playerOne').value
        return{name}
    }
    const player2 = () => {
        let name = document.getElementById('playerTwo').value
        return{name}
    }
    return {player1, player2}
}

const player1 = player()
const player2 = player()

let btn1 = document.getElementById('submit1')
btn1.addEventListener('click', function(){
    console.log(player1.player1())})

let btn2 = document.getElementById('submit2')
btn2.addEventListener('click', function(){
    console.log(player2.player2())})