document.addEventListener("DOMContentLoaded", () => {
    const exitBtn = document.querySelector(".exit");
    const viewTransactionBtn = document.getElementById("btnTrans");
    const viewBalanceBtn = document.getElementById("btnBal");
    const withdrawBtn = document.getElementById("btnWith");
    const depositBtn = document.getElementById("btnDepo");
    const generatePinBtn = document.getElementById("btnPin");
    const generateAnalyticsBtn = document.getElementById("btnAnalyt");
    const splitBillBtn = document.getElementById("btnBill");
    const createNewAccountBtn = document.getElementById("btnAccount");
    const updateAccountBtn = document.getElementById("btnUpdate");
    const deleteAccountBtn = document.getElementById("btnDelete");
    const aiChatBtn = document.getElementById("btnAi");
    const addMoneyBtn = document.getElementById("btnAddMoney");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
    }

    exitBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to exit?")) {
            localStorage.removeItem("currentUser");
            window.location.href = "index.html";
        }
    });

    viewTransactionBtn.addEventListener("click", () => {
        window.location.href = "transactions.html";
    });

    viewBalanceBtn.addEventListener("click", () => {
        window.location.href = "balance.html";
    });

    withdrawBtn.addEventListener("click", () => {
        window.location.href = "withdraw.html";
    });

    depositBtn.addEventListener("click", () => {
        window.location.href = "deposit.html";
    });

    addMoneyBtn.addEventListener("click", () => {
        window.location.href = "addMoney.html";
    });

    generatePinBtn.addEventListener("click", () => {
        window.location.href = "generatePin.html";
    });

    generateAnalyticsBtn.addEventListener("click", () => {
        window.location.href = "generateAnalytics.html";
    });

    splitBillBtn.addEventListener("click", () => {
        window.location.href = "splitBill.html";
    });

    createNewAccountBtn.addEventListener("click", () => {
        window.location.href = "createNewAccount.html";
    });

    updateAccountBtn.addEventListener("click", () => {
        window.location.href = "updateAccountInfo.html";
    });

    deleteAccountBtn.addEventListener("click", () => {
        window.location.href = "deleteAccount.html";
    });

    aiChatBtn.addEventListener("click", () => {
        window.location.href = "aiChat.html";
    });
});
