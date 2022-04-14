/* //Second solution
document.querySelector('.btn-success').addEventListener('click',()=>{
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number+1
})

document.querySelector('.btn-danger').addEventListener('click',()=>{
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
})

document.querySelector('.btn-primary').addEventListener('click',()=>{
    document.getElementById('number').innerHTML = 0
}) */



function increment(){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number+1
}

function decrement(){
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
}

function neutral(){
    document.getElementById('number').innerHTML = 0
}