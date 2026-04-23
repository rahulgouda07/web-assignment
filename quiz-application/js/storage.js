function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
}

function setSession(email) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", email);
}

function getCurrentUser() {
    if (localStorage.getItem("isLoggedIn") !== "true") return null;
    const email = localStorage.getItem("currentUser");
    return getUsers().find(u => u.email === email);
}

function clearSession() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
}