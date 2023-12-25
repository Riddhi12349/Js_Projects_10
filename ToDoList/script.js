const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const btn = document.querySelector(".addBtn");
btn.addEventListener("click", function addTask() {
  console.log("clicked!");
  if (inputBox.value === "") {
    alert("Write your Task!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //unicode character == mulltiply sign
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
