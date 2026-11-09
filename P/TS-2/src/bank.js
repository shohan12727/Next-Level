var BankAccount = /** @class */ (function () {
    function BankAccount(userId, userName, userBalance) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = userBalance;
    }
    BankAccount.prototype.addBalance = function (balance) {
        this._userBalance = this._userBalance + balance;
    };
    return BankAccount;
}());
var shohanAccount = new BankAccount(231, 'shohan', 12000);
shohanAccount.addBalance(100);
console.log(shohanAccount);
var shohanAccount2 = new BankAccount(241, 'shohan', 12000);
// console.log(shohanAccount, shohanAccount2)
