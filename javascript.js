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
        setCell: function(index, value){   //index and value are working as expected
            let cells = document.querySelectorAll(`[id^="cell${index}"]`)
            cells.forEach((cell) => {
               // cell.addEventListener('click', function(e) {
                //e.target.textContent = value
                grid.splice(index, 1, value)
                let newCell = Array.from(cells)
                //let parent = document.getElementById('grid')
                //let child = document.createElement('div')
                //let newCell = (`cells${index}`)
                //child.setAttribute('id', `cell${index}`)
                cell.textContent = value
                console.log(cell)
                //console.log(value)
                //console.log(grid[index])
                //parent.appendChild(child) 
                })
               // grid.splice(index, 1, value)
           // })
            console.log(grid)
        },
        board: function(){ //this function creates the grid on screen. Find a way to link this and setCell
            for (let i = 0; i < grid.length; i++) {
                let parent = document.getElementById('grid')
                let child = document.createElement('div')
                child.setAttribute('id', `cell${i}`)
                child.textContent = grid[i]
                parent.appendChild(child)              
            }
        },
        getBoard: function(){
            //function that returns a copy of the board
        }
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
                 //   gameBoard.grid.splice(cell.id.slice(-1), 1, 'X')
                    //gameBoard.board()
                    player_one = 0
                  //  e.target.textContent = 'X'
       //             console.log(gameBoard.grid)
        //            console.log(e.target.id.slice(-1))
                }else if (e.target.textContent == '' && player_one == 0){
                    gameBoard.setCell(e.target.id.slice(-1), 'O')
                    //e.target.textContent = 'O'  
                    //gameBoard.grid.splice(cell.id.slice(-1), 1, 'O')
                    //parent.removeChild(cell)     
                    //gameBoard.board()     
                    player_one = 1
        //            console.log(gameBoard.grid)
         //           console.log(e.target.id.slice(-1))
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
})

let showGrid = document.getElementById('showGrid')
showGrid.addEventListener('click', function(){
    console.log(gameBoard.grid)
})