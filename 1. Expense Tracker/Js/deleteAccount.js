document.addEventListener("DOMContentLoaded", () => {
    const deleteAccountForm = document.getElementById("delete-account-form");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (deleteAccountForm) {
        deleteAccountForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (confirm("Are you sure you want to delete your account? This action is irreversible.")) {
                localStorage.clear();
                alert("Account deleted successfully.");
                window.location.href = "index.html";
            }
        });
    }
});

  