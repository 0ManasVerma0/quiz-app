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
            choice: [
              "Hyper Text Markup Language",
              "Home Tool Markup Language",
              "Hyperlinks and Text Markup Language",
              "Hyper Tool Multi Language"
            ],
            answer: "Hyper Text Markup Language"
          },
          {
            question: "Which of these is a programming language?",
            choice: ["HTTP", "HTML", "Python", "WWW"],
            answer: "Python"
          },
          {
            question: "What symbol is used to start a comment in Python?",
            choice: ["//", "#", "/*", "--"],
            answer: "#"
          },
          {
            question: "Which keyword is used to define a function in JavaScript?",
            choice: ["func", "function", "def", "lambda"],
            answer: "function"
          },
          {
            question: "Which of these is used to style web pages?",
            choice: ["HTML", "CSS", "SQL", "Python"],
            answer: "CSS"
          }
    ]
})