const startBtn = document.querySelector(".startBtn");
const questions = document.querySelector(".question");
const timer = document.querySelector(".timer");
const options = document.querySelector(".options");
let correctAns = 0;

// ? Questions Array
let questionsArr = [
  {
    question: "2+2+2",
    optionsArr: [22, 11, 4, 6],
    answer: 6,
  },
  {
    question: "2+2*2*2",
    optionsArr: [8, 4, 10, 6],
    answer: 10,
  },
  {
    question: "2*11+2",
    optionsArr: [10, 24, 16, 6],
    answer: 24,
  },
  {
    question: "2+1",
    optionsArr: [4, 2, 3, 1],
    answer: 3,
  },
];

// ? To Display Options on Browser
function addOptionHTML(optionsArr) {
  for (let i = 0; i < optionsArr.length; i++) {
    let l = document.createElement("label");
    let r = document.createElement("input");
    let s = document.createElement("span");
    r.type = "radio";
    r.name = "option";
    r.value = optionsArr[i];
    s.innerHTML = optionsArr[i];
    l.appendChild(r);
    l.appendChild(s)
    options.children[0].appendChild(l);
  }
}

// ? To Display Questions on Browser
function addQuestionHTML(question) {
  questions.innerHTML = `<h1> ${question} </h1>`;
}

// ? To Get Shuffled Questions
function toShuffleQuestions(questionsArr) {
  let randomQuestion = [];
  for (let i = 0; i < questionsArr.length; i++) {
    let random = Math.floor(Math.random() * questionsArr.length);
    if (randomQuestion.includes(questionsArr[random])) {
      return toShuffleQuestions(questionsArr);
    } else {
      randomQuestion.push(questionsArr[random]);
    }
  }
  return randomQuestion;
}


// ? To Get Shuffled Options
function toShuffleOptions(optionsArr) {
  let randomOption = [];
  for (let i = 0; i < optionsArr.length; i++) {
    let random = Math.floor(Math.random() * optionsArr.length);
    if (randomOption.includes(optionsArr[random])) {
      return toShuffleOptions(optionsArr);
    } else {
      randomOption.push(optionsArr[random]);
    }
  }
  return randomOption;
}

// ? To get Whole Quiz
function showQuiz(optionsArr, question) {
  addQuestionHTML(question);
  addOptionHTML(optionsArr);
}

startBtn.addEventListener("click", () => {

  // ? Show Quiz HTML
  startBtn.classList.add("hide");
  timer.classList.remove("hide");
  questions.classList.remove("hide");
  options.classList.remove("hide");

  // ? Initialize the count
  let count = 5;
  let questionCount = 0;
  timer.innerHTML = count;

  // ? Initialize the Quiz Questions 
  let shuffledQuestions = toShuffleQuestions(questionsArr);
  let question = shuffledQuestions[questionCount];
  let shuffleOptions = toShuffleOptions(question.optionsArr);
  showQuiz(shuffleOptions, question.question);

  // ? Time Interval
  let timeInterval = setInterval(() => {
    count--;
    timer.innerHTML = count;

    if (count < 0) {
      count = 5;
      timer.innerHTML = count;

      // ? Get input answer
      let inputs = document.querySelectorAll("input");
      inputs.forEach((el) => {
        if (el.checked && Number(el.value) === question.answer) {
          correctAns++;
        }
      })

      questionCount++;
      
      // ? End the TimeInterval
      if (questionCount === shuffledQuestions.length) {
        clearInterval(timeInterval);
        timer.classList.add("hide");
        questions.classList.add("hide");
        options.classList.add("hide");
        document.querySelector("h2").innerText = `Correct Ans :- ${correctAns} out of 4`;
      }
      
      // ? To the next Question
      options.children[0].innerHTML = "";
      question = shuffledQuestions[questionCount];
      shuffleOptions = toShuffleOptions(question.optionsArr);
      showQuiz(shuffleOptions, question.question);
    }

  }, 1000);
});

function* getData(x,y) {
  yield x*y;
  yield x*y;
}

let processNum = getData(23, 45);
processNum.next();
console.log(processNum.next().value)