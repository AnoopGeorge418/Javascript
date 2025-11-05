import crypto from "crypto"

/**
 * Represents all transaction histories in the Expense Tracker Bank.
 * @class
*/

export class TransactionHistory {

    /** 
     * Creates an instance of TransactionHistory.
     * @constructor
     * @param {string} transactionTitle - A short descriptive title for the transaction (e.g: "Glocery Run", "Restaurant Bill"...).
     * @param {string} transactionDescription - A detailed description about this transaction.
     * @param {string} transactionCategory - Category of transaction (e.g: Online, Food, Sports, Gamiing, other...).
     * @param {string} transactionFrom - The depositer account name.
     * @param {string} transactionTo - The recipient account name.
     * @param {Date} [transactionDate] - The date of transaction.
     * @param {Date} [transactionTime] - The time of transaction.
     * @param {number} [transactionAmount = 0] - The total teansaction amount.
     * @param {boolean} [transactionBillSplit = false] - Bill splitted with colleges/friends.
     * @param {string} transactionDepositerAccountType - Account type of depositer.
     * @param {string} transactionRecipientAccountType - Account type of recipient. 
    */

    constructor ( transactionTitle, transactionDescription, transactionCategory, transactionFrom, transactionTo, transactionDate = new Date(), transactionTime = new Date(), transactionAmount = 0, transactionBillSplit = false, transactionDepositerAccountType, transactionRecipientAccountType ) {

        /**
         * A unique identifier for the transaction, generated using crypto.randomUUID().
         * @type {string}
        */

        this.transactionID = crypto.randomUUID();
        this.transactionTitle = transactionTitle;
        this.transactionDescription = transactionDescription;
        this.transactionCategory = transactionCategory;
        this.transactionFrom = transactionFrom;
        this.transactionTo = transactionTo;
        this.transactionDate = transactionDate;
        this.transactionTime = transactionTime;
        this.transactionAmount = transactionAmount;
        this.transactionBillSplit = transactionBillSplit;
        this.transactionDepositerAccountType = transactionDepositerAccountType;
        this.transactionRecipientAccountType = transactionRecipientAccountType;
    }
}
