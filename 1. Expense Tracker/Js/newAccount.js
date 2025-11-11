document.addEventListener("DOMContentLoaded", () => {
    const createAccountForm = document.getElementById("create-account-form");

    if (createAccountForm) {
        createAccountForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const confirmPassword = document.getElementById("confirm-password").value.trim();
            const accountType = document.getElementById("account-type").value;
            const initialDeposit = parseFloat(document.getElementById("initial-deposit").value);

            if (!name || !email || !password || !confirmPassword || !accountType || isNaN(initialDeposit)) {
                alert("Please fill in all fields!");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            if (initialDeposit < 500) {
                alert("Initial deposit must be at least ₹500.");
                return;
            }

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const userExists = users.some(user => user.email === email);

            if (userExists) {
                alert("User with this email already exists!");
                return;
            }

            const accountNumber = Math.floor(100000000000 + Math.random() * 900000000000).toString();
            const newUser = {
                name,
                email,
                password,
                accountType,
                balance: initialDeposit,
                accountNumber,
                transactions: [],
            };

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert(`Account created successfully! Your account number is ${accountNumber}`);
            window.location.href = "login.html";
        });
    }
});


  