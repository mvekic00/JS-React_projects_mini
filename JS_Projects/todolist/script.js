function addtolist(){
    var taskname = document.getElementById('taskname').value
    var tododiv = document.getElementById('mytodo')

    var newtodoitem = document.createElement('div')
    var todoname = document.createElement('li')

    todoname.innerHTML = taskname

    var deletebtn = document.createElement('i')
    deletebtn.classList.add('far')
    deletebtn.classList.add('fa-trash-alt')

    tododiv.appendChild(newtodoitem)
    newtodoitem.appendChild(todoname)
    todoname.appendChild(deletebtn)
}

var tododiv = document.getElementById('mytodo')
tododiv.addEventListener('click',deleteitem)

function deleteitem(e)
{
    const element = e.target
    if(element.classList[0]==='far'){
        element.parentElement.parentElement.remove()
    }
}