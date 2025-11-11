document.addEventListener("DOMContentLoaded", () => {
    const depositForm = document.getElementById("deposit-form");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (depositForm) {
        depositForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const recipientAccountNumber = document.getElementById("recipient-account-number").value.trim();
            const amount = parseFloat(document.getElementById("amount").value);

            if (!recipientAccountNumber || isNaN(amount) || amount <= 0) {
                alert("Please fill in all fields correctly.");
                return;
            }

            if (currentUser.balance < amount) {
                alert("Insufficient balance.");
                return;
            }

            const recipientIndex = users.findIndex(user => user.accountNumber === recipientAccountNumber);

            if (recipientIndex === -1) {
                alert("Recipient account not found.");
                return;
            }

            const recipient = users[recipientIndex];

            currentUser.balance -= amount;
            recipient.balance += amount;

            const senderTransaction = {
                id: Date.now().toString(),
                title: "Transfer to " + recipient.name,
                category: "Transfer",
                from: "Self",
                to: recipient.name,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                amount: -amount,
            };
            currentUser.transactions.push(senderTransaction);

            const recipientTransaction = {
                id: Date.now().toString(),
                title: "Transfer from " + currentUser.name,
                category: "Transfer",
                from: currentUser.name,
                to: "Self",
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),
                amount: amount,
            };
            recipient.transactions.push(recipientTransaction);

            const currentUserIndex = users.findIndex(user => user.accountNumber === currentUser.accountNumber);
            if (currentUserIndex !== -1) {
                users[currentUserIndex] = currentUser;
            }
            users[recipientIndex] = recipient;

            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            alert(`₹ ${amount.toLocaleString()} has been successfully transferred to ${recipient.name}.`);
            window.location.href = "dashboard.html";
        });
    }
});

  