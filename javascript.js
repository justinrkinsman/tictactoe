/*let btn = document.getElementById('hello')
    btn.addEventListener('click', sayHello)

function sayHello(){
    console.log('Hello')
}*/

let grid = ['', '', '', '', '', '', '', '', ''];

document.addEventListener('click', function(e){
    if(e.target && e.target.textContent == ''){
        e.target.value = 'X'
        grid.splice(((e.target.id.slice(-1))-1), 1, 'X')
        console.log(grid)
       // randomO
    }
    //const randomO = grid[Math.floor(Math.random() * grid.length)];
})

const gameBoard = (() => {
    const cell1 = document.getElementById('cell1');
    const cell2 = document.getElementById('cell2');
    const cell3 = document.getElementById('cell3');
    const cell4 = document.getElementById('cell4');
    const cell5 = document.getElementById('cell5');
    const cell6 = document.getElementById('cell6');
    const cell7 = document.getElementById('cell7');
    const cell8 = document.getElementById('cell8');
    const cell9 = document.getElementById('cell9');
})()

const player = (name, selection) => {
    const sayHello = () => console.log(`My name is ${name} and I choose ${selection}`)
    return {name, selection, sayHello}
}

const playerOne = player('justin', 'x')
playerOne.sayHello()