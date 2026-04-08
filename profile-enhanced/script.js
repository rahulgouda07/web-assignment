document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Show greeting message
    const studentName = "Rahul";
    alert(`Welcome, ${studentName}!`);

    // Ensure the header title reflects the specific student's name
    const greetingTitle = document.getElementById("greeting-title");
    if (greetingTitle) {
        greetingTitle.textContent = `${studentName}'s Student Profile`;
    }

    // 2. Form Validation & Submission Event
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        
        // Prevent form submission if invalid
        e.preventDefault(); 

        const nameField = document.getElementById("name").value.trim();
        const classField = document.getElementById("class").value.trim();
        const messageField = document.getElementById("message").value.trim();

        // Validate empty fields
        if (nameField === "" || classField === "" || messageField === "") {
            alert("Error: All fields are required. Please fill in your Name, Class, and Message before submitting.");
        } else {
            // Show alert on successful submit
            alert(`Success! Thank you, ${nameField}. Your message has been sent.`);
            form.reset(); // Clear the form
        }
    });

    // 3. Bonus Feature: Show Marks Average using JS
    const calcAvgBtn = document.getElementById("calc-avg-btn");
    calcAvgBtn.addEventListener("click", () => {
        const marksElements = document.querySelectorAll(".mark");
        let total = 0;
        let count = 0;

        marksElements.forEach(element => {
            const score = parseFloat(element.textContent);
            if (!isNaN(score)) {
                total += score;
                count++;
            }
        });

        if (count > 0) {
            const average = (total / count).toFixed(1);
            const display = document.getElementById("average-display");
            display.innerHTML = `<strong>Average Score:</strong> <span style="color: #4A90E2">${average} / 100</span>`;
            
            // Disable button after calculating to prevent redundant clicks
            calcAvgBtn.textContent = "Average Calculated";
            calcAvgBtn.style.opacity = "0.7";
            calcAvgBtn.disabled = true;
        }
    });
});
