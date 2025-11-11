document.addEventListener("DOMContentLoaded", () => {
    const generatePinForm = document.getElementById("generate-pin-form");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (generatePinForm) {
        generatePinForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const currentPassword = document.getElementById("current-password").value.trim();
            const newPin = document.getElementById("new-pin").value.trim();
            const confirmPin = document.getElementById("confirm-pin").value.trim();

            if (!currentPassword || !newPin || !confirmPin) {
                alert("Please fill in all fields!");
                return;
            }

            if (currentUser.password !== currentPassword) {
                alert("Incorrect current password!");
                return;
            }

            if (newPin !== confirmPin) {
                alert("New PINs do not match!");
                return;
            }

            currentUser.password = newPin;

            const userIndex = users.findIndex(user => user.accountNumber === currentUser.accountNumber);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(users));
            }

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert("PIN updated successfully!");
            window.location.href = "dashboard.html";
        });
    }
});

  