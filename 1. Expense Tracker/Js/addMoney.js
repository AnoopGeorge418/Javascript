document.addEventListener("DOMContentLoaded", () => {
    const addMoneyForm = document.getElementById("add-money-form");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (addMoneyForm) {
        addMoneyForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const amount = parseFloat(document.getElementById("amount").value);

            if (isNaN(amount) || amount <= 0) {
                alert("Please enter a valid amount.");
                return;
            }

            currentUser.balance += amount;
            const transaction = {
                id: Date.now().toString(),
                title: "Added Money",
                category: "Deposit",
                from: "Self",
                to: "Self",
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                amount: amount,
            };
            currentUser.transactions.push(transaction);

            const userIndex = users.findIndex(user => user.accountNumber === currentUser.accountNumber);
            if (userIndex !== -1) {
                users[userIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(users));
            }

            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert(`₹ ${amount.toLocaleString()} has been successfully added to your account.`);
            window.location.href = "dashboard.html";
        });
    }
});
