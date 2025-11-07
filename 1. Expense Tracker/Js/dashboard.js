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

    exitBtn.addEventListener("click", () => {
        // warning ui
        window.location.href = "./index.html";
    })
})