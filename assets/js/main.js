//get the icons
var trash = document.getElementById('trash');

//get the icons
var task_trash = document.getElementById('task-trash');

//get list trash icon
var list_trash = document.getElementById('list-trash');


//get the modal 
var modal = document.getElementById('simpleModal');

//get open modal button
var modalBtn = document.getElementById("modalBtn");

//get close button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//open modal
modalBtn.addEventListener('click', openModal);

//close modal
closeBtn.addEventListener('click', closeModal);

//close modal when clicked outside
window.addEventListener('click', closeOutside)

list_trash.addEventListener('click', listAlert);

trash.addEventListener('click', iconAlert);

task_trash.addEventListener('click', iconAlert2);

//function to open modal
function openModal(){

    modal.style.display = 'block';

}

//function to close modal when button clicked
function closeModal(){

    modal.style.display = 'none';

}

function listAlert(){
    alert("Item deleted!");
}

function iconAlert(){
    alert("Item deleted!");
}


function iconAlert2(){
    alert("Item deleted!");
}

//function to close modal when clicked outside
function closeOutside(e){
    if(e.target == modal){
    modal.style.display = 'none';
    }
}