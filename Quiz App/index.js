const startBtn = document.querySelector(".startBtn");
const questions = document.querySelector(".question");
const timer = document.querySelector(".timer");
const options = document.querySelector(".options");
let correctAns = 0;

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

// To Display Options on Browser
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
    console.log(options)
  }
}

// To Display Questions on Browser
function addQuestionHTML(question) {
  questions.innerHTML = `<h1> ${question} </h1>`;
}

// To Get Shuffled Questions
function toShuffleQuestions(questionsArr) {
  let randomQuestion = [];
  for (let i = 0; i < questionsArr.length; i++) {
    let random = Math.floor(Math.random() * questionsArr.length);
    if (randomQuestion.includes(random)) {
      return toShuffleQuestions(questionsArr);
    } else {
      randomQuestion.push(random);
    }
  }
  return randomQuestion;
}


// To Get Shuffled Options
function toShuffleOptions(optionsArr) {
  let randomOption = [];
  for (let i = 0; i < optionsArr.length; i++) {
    console.log(randomOption)
    let random = Math.floor(Math.random() * optionsArr.length);
    if (randomOption.includes(options[random])) {
      return toShuffleQuestions(optionsArr);
    } else {
        randomOption.push(optionsArr[random]);
    }
  }
  return randomOption
}

// To get Whole Quiz
function showQuiz(optionsArr, question) {
    addQuestionHTML(question);
    console.log(toShuffleOptions(optionsArr))
    addOptionHTML(toShuffleOptions(optionsArr));
}

startBtn.addEventListener("click", () => {
  startBtn.classList.add("hide");
  timer.classList.remove("hide");
  questions.classList.remove("hide");
  options.classList.remove("hide");


  let count = 5;
  let questionCount = 0;
  timer.innerHTML = count;
  
      let shuffledQuestions = toShuffleQuestions(questionsArr);
      let question = questionsArr[shuffledQuestions[questionCount]];
    //   console.log(question)
      showQuiz(question.optionsArr, question.question);
    //   questionCount++;

//   let timeInterval = setInterval(() => {
//     count--;
//     timer.innerHTML = count;

    
//     if (count < 0) {
//       count = 5;
//       timer.innerHTML = count;
//     }
//     if (questionCount === shuffledQuestions.length) {
//         clearInterval(timeInterval);
//     }
//   }, 1000);
});
