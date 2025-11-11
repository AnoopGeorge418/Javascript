document.addEventListener("DOMContentLoaded", () => {
    const withdrawForm = document.getElementById("withdraw-form");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (withdrawForm) {
        withdrawForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const amount = parseFloat(document.getElementById("amount").value);

            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }

            if (currentUser.balance < amount) {
                alert("Insufficient balance.");
                return;
            }

            currentUser.balance -= amount;
            const transaction = {
                id: Date.now().toString(),
                title: "Withdrawal",
                category: "Withdrawal",
                from: "Self",
                to: "Self",
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                amount: -amount,
            };
            currentUser.transactions.push(transaction);

            const userIndex = users.findIndex(user => user.accountNumber === currentUser.accountNumber);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(users));
            }

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert(`Withdrawal successful! Your new balance is ₹ ${currentUser.balance.toLocaleString()}`);
            window.location.href = "dashboard.html";
        });
    }
});

  