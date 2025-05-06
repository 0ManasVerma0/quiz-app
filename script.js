document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("start-btn");
    const restartBtn = document.getElementById("restart-btn");
    const nextBtn = document.getElementById("next-btn");
    const scoreDisplay = document.getElementById("score");
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const choicesList = document.getElementById("choices-list");
    const questionTextDisplay = document.getElementById("question-text");

    const questions = [
        {
            question: "What does HTML stand for?",
            choices: [
              "Hyper Text Markup Language",
              "Home Tool Markup Language",
              "Hyperlinks and Text Markup Language",
              "Hyper Tool Multi Language"
            ],
            answer: "Hyper Text Markup Language"
          },
          {
            question: "Which of these is a programming language?",
            choices: ["HTTP", "HTML", "Python", "WWW"],
            answer: "Python"
          },
          {
            question: "What symbol is used to start a comment in Python?",
            choices: ["//", "#", "/*", "--"],
            answer: "#"
          },
          {
            question: "Which keyword is used to define a function in JavaScript?",
            choices: ["func", "function", "def", "lambda"],
            answer: "function"
          },
          {
            question: "Which of these is used to style web pages?",
            choices: ["HTML", "CSS", "SQL", "Python"],
            answer: "CSS"
          }
    ]

    let questonIndex = 0;
    let score = 0;

    startBtn.addEventListener("click", startQuiz)
    nextBtn.addEventListener("click", () => {
        questonIndex++;
        if(questonIndex < questions.length){
            showQuestion();
        }else{
            showResult();
        }
    })
    restartBtn.addEventListener("click", () => {
        questonIndex = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        startQuiz();
    })

    function startQuiz(){
        startBtn.classList.add("hidden");
        resultContainer.classList.add("hidden")
        questionContainer.classList.remove("hidden");
        showQuestion();
    }

    function showQuestion(){
        nextBtn.classList.add("hidden");
        questionTextDisplay.textContent = questions[questonIndex].question;
        choicesList.innerHTML = ""; //clears previous choices
        questions[questonIndex].choices.forEach((choice) => {
            const li = document.createElement("li");
            li.textContent = choice;
            li.addEventListener("click", () => selectAnswer(choice));
            choicesList.appendChild(li)
        })
    }

    function selectAnswer(choice){
        const correctAnswer = questions[questonIndex].answer;
        if(choice === correctAnswer){
            score++;
        }
        nextBtn.classList.remove("hidden")
    }

    function showResult(){
        questionContainer.classList.add("hidden");
        resultContainer.classList.remove("hidden");
        scoreDisplay.textContent = `${score} out of ${questions.length}`
    }
})