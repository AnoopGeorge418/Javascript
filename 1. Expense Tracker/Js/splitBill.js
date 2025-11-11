document.addEventListener("DOMContentLoaded", () => {
    const splitBillForm = document.getElementById("split-bill-form");
    const splitResult = document.getElementById("split-result");
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        window.location.href = "login.html";
        return;
    }

    if (splitBillForm) {
        splitBillForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const totalBill = parseFloat(document.getElementById("total-bill").value);
            const numberOfPeople = parseInt(document.getElementById("number-of-people").value);

            if (isNaN(totalBill) || totalBill <= 0 || isNaN(numberOfPeople) || numberOfPeople < 2) {
                alert("Please enter valid values for the total bill and the number of people.");
                return;
            }

            const amountPerPerson = totalBill / numberOfPeople;
            splitResult.innerHTML = `Each person should pay ₹ ${amountPerPerson.toLocaleString()}`;
        });
    }
});

  