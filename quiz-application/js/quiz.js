document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;

    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const nextBtn = document.getElementById("nextBtn");
    const progress = document.getElementById("progress");

    function loadQuestion() {
        selectedAnswer = null;
        nextBtn.style.display = "none";
        const q = quizData[currentQuestionIndex];
        
        progress.innerText = `Question ${currentQuestionIndex + 1} of ${quizData.length}`;
        questionText.innerText = q.question;
        optionsContainer.innerHTML = "";

        q.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.className = "option-btn";
            btn.onclick = () => selectOption(btn, opt);
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(btn, opt) {
        document.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedAnswer = opt;
        nextBtn.style.display = "block";
    }

    nextBtn.addEventListener("click", () => {
        if (selectedAnswer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            localStorage.setItem("recentScore", score);
            localStorage.setItem("totalQuestions", quizData.length);
            window.location.href = "result.html";
        }
    });

    loadQuestion();
});