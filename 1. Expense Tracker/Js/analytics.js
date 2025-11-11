document.addEventListener("DOMContentLoaded", () => {
    const totalBalance = document.getElementById("total-balance");
    const totalTransactions = document.getElementById("total-transactions");
    const totalSpent = document.getElementById("total-spent");
    const totalReceived = document.getElementById("total-received");
    const transactionChartCanvas = document.getElementById("transaction-chart");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (totalBalance) {
        totalBalance.textContent = `₹ ${currentUser.balance.toLocaleString()}`;
    }

    if (totalTransactions) {
        totalTransactions.textContent = currentUser.transactions.length;
    }

    if (totalSpent) {
        const spent = currentUser.transactions
            .filter(t => t.amount < 0)
            .reduce((acc, t) => acc + Math.abs(t.amount), 0);
        totalSpent.textContent = `₹ ${spent.toLocaleString()}`;
    }

    if (totalReceived) {
        const received = currentUser.transactions
            .filter(t => t.amount > 0)
            .reduce((acc, t) => acc + t.amount, 0);
        totalReceived.textContent = `₹ ${received.toLocaleString()}`;
    }

    if (transactionChartCanvas) {
        const transactionLabels = currentUser.transactions.map(t => t.date);
        const transactionData = currentUser.transactions.map(t => t.amount);

        new Chart(transactionChartCanvas, {
            type: 'line',
            data: {
                labels: transactionLabels,
                datasets: [{
                    label: 'Transaction Amount',
                    data: transactionData,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderColor: 'rgba(255, 255, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: 'white'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'white'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'white'
                        }
                    }
                }
            }
        });
    }
});

  