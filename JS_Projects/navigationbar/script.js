/*  
    //First way
    document.querySelector('.hamburger-wrapper').addEventListener('click',()=>{
    document.querySelector('.maindiv').classList.toggle('change')
}) */

var navstatus = 0;

function openNav(){
    if(!navstatus){
        $('.maindiv').css('width','100vw')
        $('li').css('display','block')
        navstatus = 1
    }
    else{
        $('.maindiv').css('width','0')
        $('li').css('display','none')
        navstatus = 0
    }
}