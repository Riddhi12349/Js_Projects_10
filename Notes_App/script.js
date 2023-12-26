const addBtn = document.getElementById("add-btn");
const notesContainer = document.querySelector(".notes-container");
// console.log(addBtn);

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
function createNotes() {
  let p = document.createElement("p");
  p.classList.add("input-box");
  let img = document.createElement("img");
  img.src = "images/delete.png";

  p.setAttribute("contenteditable", "true");

  notesContainer.appendChild(p).appendChild(img);
}

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

addBtn.addEventListener("click", createNotes);

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
