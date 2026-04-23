document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
        return;
    }

    const score = localStorage.getItem("recentScore") || 0;
    const total = localStorage.getItem("totalQuestions") || 0;
    
    document.getElementById("scoreDisplay").innerText = `${score} / ${total}`;
});