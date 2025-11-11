<aside>

</aside>

# Project Flow

- Welcomes user with all welcome instructions
- User enters the account number(random id number of 12 digit) / username and password —- App Verifies it
    - If verifies - success message and moves to next stage
    - If not verifies - throws error
- Displays options:
    - View Transactions
        1. list of all transaction -
            1. ID
            2. title
            3. category
            4. from 
            5. to
            6. date
            7. time
            8. amount
            9. bill split - if done
                1. total number of people
                2. names
                3. account numbers
                4. amount splitted
            10. account type of depositer
            11. account type of recipient
        2. search through name of transaction, id, date, amount
    - View Balance
        1. displays total balance
    - Withdraw
        1. account number
        2. holder name 
        3. digital sign(name of holder)
        4. amount
        5. account type
    - Deposit
        1. holder name
        2. digital sign - depositer
        3. account number of recipient
        4. recipient name
        5. amount
        6. account type
    - Generate New Pin(password)
        - green pin - One Time Password(console .log) - verifies matches
        - new pin - confirm pin - save
    - Generate Report & Analytics
        - password - verifies
        - all detailed info of account
    - Split Bill
        - Enter pin - verifies
        - Total bill amount
        - Number of splitters
        - percentage for each
        - displays split amounts for each
        - pays the bill for this user by choosing account type
    - Create new account
        1. name
        2. email - otp - verifies - then recieves an id number of 6 digit
        3. recognition id - 6digit
        4. digital sign
        5. type of account
            1. zero balance - no penalities
            2. premium  - penalities applies
        6. deposit amount more than 500 for inital 
        7. password/pin generation
            - new pin
            - confirm pin
        8. account number generates by system of 12 digit
    - Update Account info
        - confirm pin
        - can update all info other than account number, recognition id
        - account type change to
            - Zero balance - cost-free
            - Premium - 500rs
    - Account Deletion
        - Confirm pin
        - Show message
        - enter the name, account number
        - displays all info of account
        - can move amount to another account - or will be lost
        - delete permanently - looses all info and access
    - Ai Chat - chatgpt, gemini, cluade, deepseek, perplexity - for research, coding, search
    - Exit App
        - just give message and exit

<aside>

**NOTE:** 

- By Default total balance will be 0
- User has to deposit amount minimum 1000 rs
- If balance is less than 100 - adds a penality of 100 every day.
- Total number of account a user can have is 3
    
    Same rules for account creations
    
    - 2 premium and 1 zero balance
    - 2 zero balance and 1 premium
    - or just 2 accounts
    - or just 1 account
</aside>