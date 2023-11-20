//To open 'all tasks' window (Show All Tasks button)
const showButt=document.querySelector('.showButt')
const close=document.querySelector('.close')
const nav=document.querySelector('nav')

showButt.addEventListener('click',() =>{
    nav.classList.add('open-nav')
} )

close.addEventListener('click',() => {
    nav.classList.remove('open-nav')
})

//Enter button for adding
//The item will be added even if we click enter
let taskForm = document.getElementById("taskForm")
taskForm.addEventListener('submit',(data)=>{data.preventDefault()
    addFunction()})

// priority value variable
const radioButtons = document.querySelectorAll('input[name="radio"]');

//ADD BUTTON
//To add the item in the list
function addFunction(){
    let taskInput = document.getElementById("taskInput")
    let toDoList = document.getElementById("toDoList")

    //to get the radio button value
    let selectedSize;
    for (const radioButton of radioButtons){
        if (radioButton.checked){
            selectedSize = radioButton.value;
            break;
        }
    }
    let myTemplate = `<div class="singleList">
    <li>${taskInput.value}</li>
    <button onclick = "delItem(this)">Delete</button>
    <p>${selectedSize}</p>
    </div>`
    
    toDoList.insertAdjacentHTML("beforeend",myTemplate)
    
    taskInput.value=""
    taskInput.focus()
    alert("Task added successfully")
}


//DELETE BUTTON
function delItem(x){
    x.parentElement.remove()
    
}

//PRINT BUTTON
function display() {
    window.print();
 }