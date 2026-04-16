if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "index.html"; 
}


document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {
        
        document.getElementById('welcomeMessage').textContent = `Welcome, ${currentUser.fullName}!`;
        document.getElementById('userEmailDisplay').textContent = `Logged in as: ${currentUser.email}`;
    }
});


const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        
        
        window.location.href = "index.html";
    });
}