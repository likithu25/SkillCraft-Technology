const quizData = [
    {
        question: "Which movie was directed by lokesh kanagaraj in the year 2023?",
        options: ["MASTER", "VIKRAM", "COOLIE", "LEO"],
        answer: "LEO"
    },
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which programming language is used for web development?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: "JavaScript"
    },
    {
        question: "What is the capital of India?",
        options: ["New Delhi", "Bengaluru", "Mumbai", "Kolkata"],
        answer: "New Delhi"
    },
    {
        question: "What is 5 + 3?",
        options: ["5", "8", "10", "15"],
        answer: "8"
    },
   
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        answer: "Sun Microsystems"
    },
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "<!--", "#"],
        answer: "//"
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Ruby", "HTML", "Java"],
        answer: "HTML"
    },
    {
        question: "Which function is used to print output in Python?",
        options: ["echo()", "console.log()", "print()", "printf()"],
        answer: "print()"
    },
    {
        question: "Which data structure uses LIFO (Last In First Out)?",
        options: ["Queue", "Array", "Stack", "Linked List"],
        answer: "Stack"
    },
    {
        question: "Which CSS property is used to change text color?",
        options: ["font-style", "color", "text-decoration", "background-color"],
        answer: "color"
    },
    {
        question: "In Java, which keyword is used to inherit a class?",
        options: ["this", "extends", "implements", "inherits"],
        answer: "extends"
    },
    {
        question: "What does SQL stand for?",
        options: [
            "Structured Query Language",
            "Strong Question Language",
            "Structured Question Logic",
            "Simple Query Language"
        ],
        answer: "Structured Query Language"
    }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];
    quizContainer.innerHTML = `<h2>${q.question}</h2>` +
        q.options.map(option =>
            `<div class="option" onclick="selectAnswer(this)">${option}</div>`
        ).join("");
}

function selectAnswer(selectedOption) {
    const answer = selectedOption.innerText;
    if (answer === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2>`;
}

nextBtn.addEventListener("click", () => {
    loadQuestion();
    nextBtn.style.display = "none";
});

// Start quiz
loadQuestion();


