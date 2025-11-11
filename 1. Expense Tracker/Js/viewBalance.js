document.addEventListener("DOMContentLoaded", () => {
    const balanceAmount = document.getElementById("balance-amount");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (balanceAmount) {
        balanceAmount.textContent = `₹ ${currentUser.balance.toLocaleString()}`;
    }
});
