const qs = [
  {
    q: "What is the powerhouse of the cell?",
    a: [
      { text: "Mitochondria", correct: true },
      { text: "Nucleus", correct: false },
      { text: "Endoplasmic reticulum", correct: false },
      { text: "Golgi apparatus", correct: false },
    ],
  },
  {
    q: "Which of the following is the longest river in the world?",
    a: [
      { text: "Amazon", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Nile", correct: true },
      { text: "Mississippi", correct: false },
    ],
  },
  {
    q: "Who was the first President of the United States?",
    a: [
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false },
      { text: "Abraham Lincoln", correct: false },
    ],
  },
  {
    q: "Who wrote the play Romeo and Juliet?",
    a: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Jane Austen", correct: false },
      { text: "Mark Twain", correct: false },
    ],
  },
];

const questEle = document.getElementById("question");
const ansBtn = document.getElementById("ans-btns");
const nxtBtn = document.getElementById("nxt-btn");

let curQIndx = 0;
let score = 0;

function startQuiz() {
  curQIndx = 0;
  score = 0;
  nxtBtn.innerHTML = "Next";
  showQs();
}

function resetState() {
  nxtBtn.style.display = "none";
  while (ansBtn.firstChild) {
    ansBtn.removeChild(ansBtn.firstChild);
  }
}

function showQs() {
  resetState();
  let curQ = qs[curQIndx];
  let Qno = curQIndx + 1;
  questEle.innerHTML = Qno + ". " + curQ.q;

  curQ.a.forEach((option) => {
    const btn_el = document.createElement("button");
    btn_el.innerHTML = option.text;
    btn_el.classList.add("btn");
    ansBtn.appendChild(btn_el);

    if (option.correct) {
      btn_el.dataset.correct = option.correct;
    }

    btn_el.addEventListener("click", selectAns);
  });
}

function selectAns(e) {
  const selBtn = e.target;
  const isCorr = selBtn.dataset.correct === "true";

  if (isCorr) {
    selBtn.classList.add("correct");
    score++;
  } else {
    selBtn.classList.add("incorrect");
  }

  Array.from(ansBtn.children).forEach((button) => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nxtBtn.style.display = "block";
}

function showScore() {
  resetState();
  questEle.innerHTML = `You scored ${score} out of ${qs.length}`;
  nxtBtn.innerHTML = "Play Again!";
  nxtBtn.style.display = "block";
}

function handleNextBtn() {
  curQIndx++;
  if (curQIndx < qs.length) {
    showQs();
  } else {
    showScore();
  }
}
nxtBtn.addEventListener("click", () => {
  if (curQIndx < qs.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});

startQuiz();
