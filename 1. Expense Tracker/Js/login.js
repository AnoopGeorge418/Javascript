document.addEventListener("DOMContentLoaded", () => {
    const goBackBtn = document.querySelector(".goback");
    const okBtn = document.getElementById("okBtn");
    const mainBody = document.querySelector(".main_body");
    const mainContainer = document.querySelector(".main_container");

    goBackBtn.addEventListener("click", () => {
        window.location.href = "./index.html";
    });

    okBtn.addEventListener("click", () => {
        mainBody.style.display = "none";

        // === Login container setup ===
        const loginContainer = document.createElement("div");
        loginContainer.classList.add("loginContainer");
        mainContainer.appendChild(loginContainer); 

        const btnContainer = document.createElement("div");
        btnContainer.classList.add("btnContainer");
        loginContainer.appendChild(btnContainer);

        const btn1 = document.createElement("button");
        btn1.classList.add("acChooser");
        btn1.textContent = "Account Number";
        btnContainer.appendChild(btn1);

        const btn2 = document.createElement("button");
        btn2.classList.add("usChooser");
        btn2.textContent = "Username";
        btnContainer.appendChild(btn2);

        const input1 = document.createElement("input");
        input1.classList.add("input1");
        input1.placeholder = "Enter your account number.";
        input1.type = "number";
        loginContainer.appendChild(input1);

        const input3 = document.createElement("input");
        input3.classList.add("input1");
        input3.placeholder = "Enter your 4 digit pin";
        input3.type = "password";
        loginContainer.appendChild(input3);

        const verifyBtn = document.createElement("button");
        verifyBtn.classList.add("verifyBtn");
        verifyBtn.textContent = "Verify";
        verifyBtn.type = "submit";
        loginContainer.appendChild(verifyBtn);

        // === Toast container ===
        const toastBoxContainer = document.createElement("div");
        toastBoxContainer.classList.add("toastContainer");
        mainContainer.appendChild(toastBoxContainer);

        const toastMsg = (type, message) => {
            const toastBox = document.createElement("div");
            toastBox.classList.add(type === "success" ? "toastSuccess" : "toastError");
            toastBox.textContent = message;
            toastBoxContainer.appendChild(toastBox);
            setTimeout(() => toastBox.remove(), 3000);
        };

        // === Track mode ===
        let loginMode = "account"; // "account" or "username"

        btn1.addEventListener("click", () => {
            loginMode = "account";
            input1.placeholder = "Enter your account number.";
            input1.type = "number";
            input1.value = "";
            input3.value = "";
            btn1.classList.add("active");
            btn2.classList.remove("active");
        });

        btn2.addEventListener("click", () => {
            loginMode = "username";
            input1.placeholder = "Enter your username.";
            input1.type = "text";
            input1.value = "";
            input3.value = "";
            btn2.classList.add("active");
            btn1.classList.remove("active");
        });

        // === Verification logic ===
        verifyBtn.addEventListener("click", () => {
            const idValue = input1.value.trim();
            const pinValue = input3.value.trim();

            // validation checks
            if (!idValue || !pinValue) {
                toastMsg("error", "Please fill in all fields!");
                return;
            }

            if (loginMode === "account") {
                // account number mode
                if (!/^\d+$/.test(idValue)) {
                    toastMsg("error", "Account number must be digits only!");
                    return;
                } 
                if (idValue.length != 12) {
                    toastMsg("error", "Account number should be of 12 digits.");
                    return;
                }
                if (!/^\d{4}$/.test(pinValue)) {
                    toastMsg("error", "PIN must be 4 digits!");
                    return;
                }

                // verifiying data from localstorage 
                const userAccountNumber = JSON.parse(localStorage.getItem("userAuth"));
                if ( !userAccountNumber ) {
                    toastMsg("error", "No user found in localstorage");
                    return;
                }

                if ( userAccountNumber.accountNumber === idValue && userAccountNumber.pin === pinValue ) {
                    toastMsg("success", `✅ Account ${idValue} verified successfully!`);
                } else {
                    toastMsg("error", "Incorrect user credentials!");
                }

            } 
            else if (loginMode === "username") {
                // username mode
                if (idValue.length < 3) {
                    toastMsg("error", "Username too short!");
                    return;
                }
                if (!/^\d{4}$/.test(pinValue)) {
                    toastMsg("error", "PIN must be 4 digits!");
                    return;
                }

                // verifiying data from localstorage 
                const userUserName = JSON.parse(localStorage.getItem("userAuth"));
                if ( !userUserName) {
                    toastMsg("error", "No user found in localstorage");
                    return;
                }

                if ( userUserName.accountNumber === idValue && userUserName.pin === pinValue ) {
                    toastMsg("success", `🎉 Welcome back, ${idValue}!`);
                } else {
                    toastMsg("error", "Incorrect user credentials!");
                }
            }

            // clear after verify 
            input1.value = "";
            input3.value = "";
        });
    });
});
