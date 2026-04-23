function checkAuth() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}

function logout() {
    clearSession();
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const users = getUsers();
            if (users.some(u => u.email === email)) {
                alert("Email is already registered!");
                return;
            }

            saveUser({ username, email, password });
            alert("Registration successful! Please login.");
            window.location.href = "index.html";
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const users = getUsers();
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                setSession(email);
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password.");
            }
        });
    }
});