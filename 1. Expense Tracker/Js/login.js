document.addEventListener("DOMContentLoaded", () => {
    const goBackBtn = document.querySelector(".goback");
    const okBtn = document.getElementById("okBtn");

    goBackBtn.addEventListener("click", () => {
        window.location.href = "./index.html";
    });

    okBtn.addEventListener("click", () => {
        // will be added
    });

})
