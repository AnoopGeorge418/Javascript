document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const goBackBtn = document.querySelector(".goback");

    if (goBackBtn) {
        goBackBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const accountNumber = document.getElementById("account-number").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!accountNumber || !password) {
                alert("Please fill in all fields!");
                return;
            }

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(user => (user.accountNumber === accountNumber || user.username === accountNumber) && user.password === password);

            if (user) {
                alert("Login successful!");
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }
});
