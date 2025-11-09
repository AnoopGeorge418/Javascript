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
    const mainContainer = document.querySelector(".mainContainer");

    exitBtn.addEventListener("click", () => {
        const exitWarning = document.createElement("div");
        
        // hiding dashboard contents 
        const mainH1 = document.querySelector(".mainH1");
        const btns = document.querySelector(".btnsClass");

        mainH1.style.display = "none";
        btns.style.display = "none";

        // adding content to the exit warning
        exitWarning.classList.add("main_body");

        const warningTitle = document.createElement("h1");
        warningTitle.classList.add("h1");
        warningTitle.textContent = "Are You Sure You Want To Exit?";
        exitWarning.appendChild(warningTitle);

        // creating container for buttons
        const warningBtnContainer = document.createElement("div");
        warningBtnContainer.classList.add("warningBtnContainer");
        exitWarning.appendChild(warningBtnContainer);

        // adding to buttons
        const yesBtn = document.createElement("button");
        yesBtn.classList.add("yesBtn");
        yesBtn.textContent = "Yes";
        yesBtn.type = "button";
        warningBtnContainer.appendChild(yesBtn);

        yesBtn.addEventListener("click", () => {
            window.location.href = "./index.html";
        })

        const noBtn = document.createElement("button");
        noBtn.classList.add("noBtn");
        noBtn.textContent = "No";
        noBtn.type = "button";
        warningBtnContainer.appendChild(noBtn);

        noBtn.addEventListener("click", () => {
            mainContainer.removeChild(exitWarning);
            mainH1.style.display = "block";
            btns.style.display = "grid";
        })

        mainContainer.appendChild(exitWarning);
    })

    viewTransactionBtn.addEventListener("click", () => {
        window.location.href = "./transactions.html"
    })

    viewBalanceBtn.addEventListener("click", () => {
        window.location.href = "./balance.html"
    })

    withdrawBtn.addEventListener("click", () => {
        window.location.href = "./withdraw.html"
    })

    depositBtn.addEventListener("click", () => {
        window.location.href = "./deposit.html"
    })

    generatePinBtn.addEventListener("click", () => {
        window.location.href = "./generatePin.html"
    })

    generateAnalyticsBtn.addEventListener("click", () => {
        window.location.href = "./generateAnalytics.html"
    })

    splitBillBtn.addEventListener("click", () => {
        window.location.href = "./splitBill.html"
    })

    createNewAccountBtn.addEventListener("click", () => {
        window.location.href = "./createNewAccount.html"
    })

    updateAccountBtn.addEventListener("click", () => {
        window.location.href = "./updateAccountInfo.html"
    })

    deleteAccountBtn.addEventListener("click", () => {
        window.location.href = "./deleteAccount.html"
    })

    aiChatBtn.addEventListener("click", () => {
        window.location.href = "./aiChat.html"
    })

})
