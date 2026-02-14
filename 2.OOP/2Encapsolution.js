var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount === void 0) { amount = 0; }
        this.balance += amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var acc = new BankAccount('Salman', 10000);
acc.deposit(5000);
console.log(acc.getBalance());
