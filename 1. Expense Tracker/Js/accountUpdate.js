document.addEventListener("DOMContentLoaded", () => {
    const updateAccountForm = document.getElementById("update-account-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (nameInput && emailInput) {
        nameInput.value = currentUser.name;
        emailInput.value = currentUser.email;
    }

    if (updateAccountForm) {
        updateAccountForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const newName = nameInput.value.trim();
            const newEmail = emailInput.value.trim();

            if (!newName || !newEmail) {
                alert("Please fill in all fields!");
                return;
            }

            currentUser.name = newName;
            currentUser.email = newEmail;

            const userIndex = users.findIndex(user => user.accountNumber === currentUser.accountNumber);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(users));
            }

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert("Account information updated successfully!");
            window.location.href = "dashboard.html";
        });
    }
});

  