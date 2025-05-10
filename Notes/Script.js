const notescontaniner = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box")

function shownotes(){
    notescontaniner.innerHTML=localStorage.getItem("notes");
}
shownotes();

function updateStorage(){
    localStorage.setItem("notes",notescontaniner.innerHTML);
}

createbtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img = document.createElement("img");
    inputbox.className="input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "images/delete.png";
    notescontaniner.appendChild(inputbox).appendChild(img);
})

notescontaniner.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage(); 
    }
    else if(e.target.tagName === "P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();  
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key === "enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})