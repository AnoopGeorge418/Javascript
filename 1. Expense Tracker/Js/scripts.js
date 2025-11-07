document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".launch, .signIn").forEach((btn => {
        window.location.href = "./login.html";
    }));

})
