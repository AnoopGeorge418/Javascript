document.addEventListener("DOMContentLoaded", () => {
    const transactionsTableBody = document.querySelector("#transactions-table tbody");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (transactionsTableBody) {
        if (currentUser.transactions && currentUser.transactions.length > 0) {
            currentUser.transactions.forEach(transaction => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${transaction.id}</td>
                    <td>${transaction.title}</td>
                    <td>${transaction.category}</td>
                    <td>${transaction.from}</td>
                    <td>${transaction.to}</td>
                    <td>${transaction.date}</td>
                    <td>${transaction.time}</td>
                    <td>₹ ${transaction.amount.toLocaleString()}</td>
                `;
                transactionsTableBody.appendChild(row);
            });
        } else {
            const row = document.createElement("tr");
            row.innerHTML = `<td colspan="8">No transactions found.</td>`;
            transactionsTableBody.appendChild(row);
        }
    }
});
