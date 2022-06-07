/*let btn = document.getElementById('hello')
    btn.addEventListener('click', sayHello)

function sayHello(){
    console.log('Hello')
}*/

document.addEventListener('click', function(e){
    if(e.target && e.target.textContent == ''){
        e.target.value = 'X'
    }
})