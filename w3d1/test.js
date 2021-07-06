describe("account", function() {

    const account = new Account(Bank.nextNumber);

    it("Error when trying to deposit a negative value", function() {
        assert.throw(() => account.deposit(-100), RangeError, "Deposit amount has to be greater than zero");
    });

    it("Deposit and get the deposited amount in the balance", function() {
        account.deposit(100);
        assert.equal(100, account.getBalance());
    });

    it("Error when trying to withdraw a negative value", function() {
        assert.throw(() => account.withdraw(-100), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("Error when trying to withdraw a value greater than the balance", function() {
        assert.throw(() => account.withdraw(200), Error, "Insufficient funds");
    });

    it("Print the account", function() {
        assert.equal("Account 0: balance 100", account.toString());
    });

});

describe("savings account", function() {

    let savingsAccount = new SavingsAccount(Bank.nextNumber, 0);

    it("set and get interest rate for a savings account", function() {
        savingsAccount.setInterest(0.007);
        assert.equal(0.007, savingsAccount.getInterest());
    });

    it("add interest for a savings account", function() {
        savingsAccount.deposit(100);
        assert.equal(0.007000000000000001, savingsAccount.addInterest());
    });

    it("returns the account in the correct string for printing", function() {
        assert.equal("SavingsAccount 0: balance 100.007: interest 0.007", savingsAccount.toString());
    });

    it("adds interest at end of the month", function() {
        assert.equal("Interest added SavingsAccount 0: balance 100.01400049: interest 0.007", savingsAccount.endOfMonth());
    });

});

describe("checking account", function() {

    let checkingAccount = new CheckingAccount(Bank.nextNumber, 0);

    it("set and get overdraft for a checking account", function() {
        checkingAccount.setOverdraft(500);
        assert.equal(500, checkingAccount.getOverdraft());
    });

    it("Error when trying to withdraw a value greater than thelimit", function() {
        assert.throw(() => checkingAccount.withdraw(600), Error, "Insufficient funds");
    });

    it("shows warning for negative balance at end of the month", function() {
        checkingAccount.withdraw(100);
        assert.equal("Warning, low balance CheckingAccount 0: balance -100: overdraft limit 500", checkingAccount.endOfMonth());
    });

});


describe("bank", function() {

    const bank = new Bank();
    const account = new Account(Bank.nextNumber);
    bank.addAccount(account);

    it("Add account to the bank", function() {
        const accountNumber = bank.addAccount(account);
        assert.equal(1, accountNumber);
    });
    it("Add new Saving Account", function() {
        const accountNumber = bank.addSavingsAccount(account);
        assert.equal(2, accountNumber);
    });
    it("Add new checking account", function() {
        const accountNumber = bank.addCheckingAccount(account);
        assert.equal(3, accountNumber);
    });
   
    
  
        it("closes the account with the given number", () => {
            console.log(bank._accounts.length);
            bank.closeAccount(1);
            console.log(bank._accounts.length);
            assert.equal(bank._accounts.length, 3);
            assert.equal(bank._accounts[1].getNumber(), 2);
            assert.equal(bank._accounts[1].getBalance(), 0);
           
        });
 

    it("check account number for end of Month", function() {
        const accountNumber = bank.endOfMonth(account);
        assert.equal("", accountNumber);
    });

});