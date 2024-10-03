const queJSON = [
  {
    correctAnswer: "three",
    options: ["two", "three", "five", "four"],
    question: "how many pieces of bun are in a macdonald's big mac?",
  },
  {
    correctAnswer: "Shri mati Dropadi murmu",
    options: [
      "amit shah",
      "yogi adityanath",
      "rajnath singh",
      "Shri mati Dropadi murmu",
    ],
    question: "who is the president of india?",
  },
  {
    correctAnswer: "Mukesh ambani",
    options: ["ratan tata", "Mukesh ambani", "shahruk khan", "narender modi"],
    question: "who is the richest person of india?",
  },

  {
    correctAnswer: "yogi aditya nath",
    options: [
      "akshay kumar",
      "rohit shetty",
      "prince narula",
      "yogi aditya nath",
    ],
    question: "who is the cm of up?",
  },
];

let score = 0; // to add score
let currentQue = 0;
const totalScore = queJSON.length;

//accessing all the elements
const questionEl = document.getElementById("question");

const optionEl = document.getElementById("options");

const scoreEl = document.getElementById("score");

const nextEl = document.getElementById("next");

showQue();

nextEl.addEventListener("click", () =>
{
    scoreEl.textContent = `score: ${score} / ${totalScore}`;
    nextQue();
});

function showQue() {
  //destructuring the object

  const { correctAnswer, options, question } = queJSON[currentQue];

  //setting question text content

  questionEl.textContent = question;

  const shuffledOption = shuffleOptions(options);

  //populating the options div with the buttons

  shuffledOption.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionEl.appendChild(btn);

    // event handling on the button
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      console.log(score);
      scoreEl.textContent = `score : ${score}/${totalScore}`;
      //   questionEl.textContent = "quiz completed !!";
      //   optionEl.textContent = "";
      nextQue();
    });
  });
}
function nextQue() {
  currentQue++;
  optionEl.textContent = "";
  if (currentQue >= queJSON.length) {
    questionEl.textContent = "quiz completed !!";
    nextEl.remove();
  } else {
    showQue();
  }
}

//shuffling the options

function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }
  //   console.log(options);
  return options;
}


