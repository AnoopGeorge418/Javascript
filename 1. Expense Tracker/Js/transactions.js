document.addEventListener("DOMContentLoaded", () => {

    const dummyTransactions = [
        {
          id: "#TXN001",
          title: "Dinner at BBQ Nation",
          amount: "₹1,250",
          category: "Food & Dining",
          date: "2025-11-09",
          time: "20:15",
          billsplit: "Yes - Split with 3 friends",
          from: "HDFC Bank",
          to: "Restaurant POS",
          accountType: "Savings",
          recipientAccountType: "Merchant"
        },
        {
          id: "#TXN002",
          title: "Netflix Subscription",
          amount: "₹499",
          category: "Entertainment",
          date: "2025-11-05",
          time: "10:02",
          billsplit: "No",
          from: "HDFC Bank",
          to: "Netflix India",
          accountType: "Credit Card",
          recipientAccountType: "Merchant"
        },
        {
          id: "#TXN003",
          title: "Freelance Payment Received",
          amount: "₹15,000",
          category: "Income",
          date: "2025-11-01",
          time: "14:47",
          billsplit: "No",
          from: "Upwork Client",
          to: "HDFC Bank",
          accountType: "Freelance",
          recipientAccountType: "Savings"
        },
        {
          id: "#TXN004",
          title: "Amazon Order - Headphones",
          amount: "₹2,899",
          category: "Shopping",
          date: "2025-10-28",
          time: "18:36",
          billsplit: "No",
          from: "HDFC Bank",
          to: "Amazon Seller",
          accountType: "Savings",
          recipientAccountType: "Merchant"
        },
        {
          id: "#TXN005",
          title: "Zomato - Lunch",
          amount: "₹280",
          category: "Food & Dining",
          date: "2025-10-25",
          time: "13:05",
          billsplit: "Yes - Split with 1 friend",
          from: "PhonePe Wallet",
          to: "Zomato Restaurant",
          accountType: "Wallet",
          recipientAccountType: "Merchant"
        }
      ];
      
      localStorage.setItem("Transactions", JSON.stringify(dummyTransactions));
      console.log("✅ Dummy transactions added to localStorage!");
      

    const transactionInformations = JSON.parse(localStorage.getItem("Transactions")) || [];

    const mainBody = document.querySelector(".mainbody");

    transactionInformations.forEach((transaction) => {
        const transactionViewHolder = document.createElement("div");
        transactionViewHolder.classList.add("transactionViewHolder");

        // Contents from localstroage
        const title = document.createElement("p");
        title.classList.add("titleInfo");
        title.textContent = transaction.title || "Untitled Transaction";

        const id = document.createElement("p");
        id.classList.add("id");
        id.textContent = transaction.id;

        const amount = document.createElement("p");
        amount.classList.add("amount");
        amount.textContent = transaction.amount;

        const category = document.createElement("p");
        category.classList.add("category");
        category.textContent = transaction.category;

        const date = document.createElement("p");
        date.classList.add("dateInfo");
        date.textContent = transaction.date;

        const time = document.createElement("p");
        time.classList.add("time");
        time.textContent = transaction.time;

        const billsplit = document.createElement("p");
        billsplit.classList.add("billsplit");
        billsplit.textContent = transaction.billsplit;

        const from = document.createElement("p");
        from.classList.add("from");
        from.textContent = transaction.from;

        const to = document.createElement("p");
        to.classList.add("to");
        to.textContent = transaction.to;

        const accountType = document.createElement("p");
        accountType.classList.add("accountType");
        accountType.textContent = transaction.accountType;

        const recipientAccountType = document.createElement("p");
        recipientAccountType.classList.add("recipientAccountType");
        recipientAccountType.textContent = transaction.recipientAccountType;
        
        transactionViewHolder.append(title, id, amount, category, date, time, billsplit, from, to, accountType, recipientAccountType);

        

        mainBody.appendChild(transactionViewHolder);
    });

})
