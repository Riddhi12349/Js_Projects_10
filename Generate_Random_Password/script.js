const pwBox = document.getElementById("password");
const genBtn = document.querySelector(".btn");
const copyBtn = document.querySelector(".copy");

const len = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#@$%^&*><";

const allChars = upperCase + lowerCase + number + symbol;

function createPw() {
  let pw = "";
  pw += upperCase[Math.floor(Math.random() * upperCase.length)];
  pw += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  pw += number[Math.floor(Math.random() * number.length)];
  pw += symbol[Math.floor(Math.random() * symbol.length)];

  while (len > pw.length) {
    pw += allChars[Math.floor(Math.random() * allChars.length)];
  }
  pwBox.value = pw;
}

function copyPw() {
  pwBox.select();
  document.execCommand("copy");
}

genBtn.addEventListener("click", createPw);
copyBtn.addEventListener("click", copyPw);
