const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errorDiv = document.getElementById('signupError');
        
        if (password.length < 6) {
            showError(errorDiv, "Password must be at least 6 characters.");
            return;
        }
        
        if (password !== confirmPassword) {
            showError(errorDiv, "Passwords do not match.");
            return;
        }

        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.find(user => user.email === email)) {
            showError(errorDiv, "Email is already registered.");
            return;
        }

        const newUser = { fullName, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        alert("Registration successful! Please log in.");
        window.location.href = "index.html";
    });
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const errorDiv = document.getElementById('loginError');

        let users = JSON.parse(localStorage.getItem('users')) || [];
        
        
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify({ fullName: user.fullName, email: user.email }));
            window.location.href = "home.html"; 
        } else {
            
            showError(errorDiv, "Invalid email or wrong password.");
        }
    });
}


function showError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
}