const gameBoard = (() => {
    let grid = ['', '', '', '', '', '', '', '', ''];
    return {
        displayGrid: function(){
            console.log(grid)
        },
        /*resetBoard: function(){
            let cells = document.querySelectorAll(`[id^="cell"]`)
            cells.forEach((cell) => {
                cell.textContent = ''
                grid = ['','','','','','','','','']})
                console.log(grid)
        },*/
        grid,
        setCell: function(index, value){   //index and value are working as expected
            let cells = document.querySelector(`[id^="cell${index}"]`)
            //cells.forEach((cell) => {
                //cell.addEventListener('click', function(e) {
                //e.target.textContent = value
                grid.splice(index, 1, value)
                //let newCell = Array.from(cells)
                //let parent = document.getElementById('grid')
                //let child = document.createElement('div')
                //let newCell = (`cells${index}`)
                //child.setAttribute('id', `cell${index}`)
                cells.textContent = value
                if (value == 'X'){
                    document.querySelector(`[id^="cell${index}"]`).style.color = 'red'
                }else if (value == 'O'){
                    document.querySelector(`[id^="cell${index}"]`).style.color = 'white'
                }
                //console.log(cell)
                //console.log(value)
                //console.log(grid[index])
                //parent.appendChild(child) 
                //})
                //grid.splice(index, 1, value)
            //})
            //console.log(grid)
        },
        board: function(){
            for (let i = 0; i < grid.length; i++) {
                let parent = document.getElementById('grid')
                let child = document.createElement('div')
                child.setAttribute('id', `cell${i}`)
                child.textContent = grid[i]
                parent.appendChild(child)              
            }
        },
        getBoard: function(){
            console.log(grid)
        },

}})()

gameBoard.board()

const displayController = (() => {
    let cells = document.querySelectorAll(`[id^="cell"]`)
    let player_one = 1
    //let parent = document.getElementById('grid')
    gameBoard.grid
    //let myArray = Array.from(cells)
    function playerOne(){
        cells.forEach((cell) => {
            cell.addEventListener('click', function(e) {
                if (!(e.target.textContent == "")){
                    e.target.textContent = e.target.textContent
                }else if(e.target.textContent == '' && player_one == 1){
                    gameBoard.setCell(e.target.id.slice(-1), 'X')
                    //parent.removeChild(cell)
                    //console.log(cells)
                    //gameBoard.grid.splice(cell.id.slice(-1), 1, 'X')
                    //gameBoard.board()
                    player_one = 0
                    winner()
                    //console.log(gameBoard.grid)
                    //e.target.textContent = 'X'
                    //console.log(gameBoard.grid)
                    //console.log(e.target.id.slice(-1))
                }else if (e.target.textContent == '' && player_one == 0){
                    gameBoard.setCell(e.target.id.slice(-1), 'O')
                    //e.target.textContent = 'O'  
                    //gameBoard.grid.splice(cell.id.slice(-1), 1, 'O')
                    //parent.removeChild(cell)     
                    //gameBoard.board()     
                    player_one = 1
                    winner()
                    //console.log(gameBoard.grid)
                    //console.log(gameBoard.grid)
                    //console.log(e.target.id.slice(-1))
                }
            })
        })
    }
    function winner(){
       //gameBoard.getBoard()
       let playerI = player1.playerOne()
       let playerII = player2.playerTwo()
       playerI.score = 0
       playerII.score = 0
       for (let i=0; i<=3; i++){
            if ((gameBoard.grid[0] == 'X' && gameBoard.grid[1] == 'X' && gameBoard.grid[2] == 'X') ||
                (gameBoard.grid[3] == 'X' && gameBoard.grid[4] == 'X' && gameBoard.grid[5] == 'X') ||
                (gameBoard.grid[6] == 'X' && gameBoard.grid[7] == 'X' && gameBoard.grid[8] == 'X') ||
                (gameBoard.grid[0] == 'X' && gameBoard.grid[3] == 'X' && gameBoard.grid[6] == 'X') ||
                (gameBoard.grid[1] == 'X' && gameBoard.grid[4] == 'X' && gameBoard.grid[7] == 'X') ||
                (gameBoard.grid[2] == 'X' && gameBoard.grid[5] == 'X' && gameBoard.grid[8] == 'X') ||
                (gameBoard.grid[0] == 'X' && gameBoard.grid[4] == 'X' && gameBoard.grid[8] == 'X') ||
                (gameBoard.grid[2] == 'X' && gameBoard.grid[4] == 'X' && gameBoard.grid[6])){
                let display = document.getElementById('winner')
                if (playerI.name == ""){
                    display.value = ('Player1 wins!')
                }else{
                    display.value = (`${playerI.name} wins!`)
                }
                    displayController.resetBoard()
                //console.log(gameBoard.grid)
                playerI.score++
                console.log(playerI.score)
                console.log(i)
            }else if ((gameBoard.grid[0] == 'O' && gameBoard.grid[1] == 'O' && gameBoard.grid[2] == 'O') ||
            (gameBoard.grid[3] == 'O' && gameBoard.grid[4] == 'O' && gameBoard.grid[5] == 'O') ||
            (gameBoard.grid[6] == 'O' && gameBoard.grid[7] == 'O' && gameBoard.grid[8] == 'O') ||
            (gameBoard.grid[0] == 'O' && gameBoard.grid[3] == 'O' && gameBoard.grid[6] == 'O') ||
            (gameBoard.grid[1] == 'O' && gameBoard.grid[4] == 'O' && gameBoard.grid[7] == 'O') ||
            (gameBoard.grid[2] == 'O' && gameBoard.grid[5] == 'O' && gameBoard.grid[8] == 'O') ||
            (gameBoard.grid[0] == 'O' && gameBoard.grid[4] == 'O' && gameBoard.grid[8] == 'O') ||
            (gameBoard.grid[2] == 'O' && gameBoard.grid[4] == 'O' && gameBoard.grid[6])){
                let display = document.getElementById('winner')
                if (playerI.name == ""){
                    display.value = ('Player2 wins!')
                }else{
                    display.value = (`${playerII.name} wins!`)
                }
                displayController.resetBoard()
                //console.log(gameBoard.grid)
                playerII.score++
                console.log(playerII.score)
                console.log(i)
       }
    }}
    function resetBoard() {
        //let playerI = player1.playerOne()
        //let playerII = player2.playerTwo()
        //let cells = document.querySelectorAll(`[id^="cell"]`)
        //cells.forEach((cell) => {
            //cell.textContent = ''
            //gameBoard.grid = ['','','','','','','','','']})
            gameBoard.setCell(0, '')
            gameBoard.setCell(1, '')
            gameBoard.setCell(2, '')
            gameBoard.setCell(3, '')
            gameBoard.setCell(4, '')
            gameBoard.setCell(5, '')
            gameBoard.setCell(6, '')
            gameBoard.setCell(7, '')
            gameBoard.setCell(8, '')
        }//)
           // console.log(gameBoard.grid)
   // }
    return {playerOne, winner, resetBoard}
})()

displayController.playerOne()

const player = () => {
    const playerOne = () => {
        let name = document.getElementById('playerOne').value
        let score = 0
        return{name, score}
    }
    const playerTwo = () => {
        let name = document.getElementById('playerTwo').value
        let score = 0
        return{name, score}
    }
    return {playerOne, playerTwo}
}

const player1 = player()
const player2 = player()

let btn1 = document.getElementById('submit1')
btn1.addEventListener('click', function(){
    let playerI = player1.playerOne()
    console.log(playerI.name)})

let btn2 = document.getElementById('submit2')
btn2.addEventListener('click', function(){
    let playerII = player2.playerTwo()
    console.log(playerII.name)})

let resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', function(){
    displayController.resetBoard()
    //gameBoard.grid = ['','','','','','','','','']
})

/*let showGrid = document.getElementById('showGrid')
showGrid.addEventListener('click', function(){
    console.log(gameBoard.grid)
})*/