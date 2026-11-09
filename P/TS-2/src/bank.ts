class BankAccount {
  public readonly userId: number;
  public userName: string;
  private _userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this._userBalance = userBalance;
  }


  private addBalance (balance:number){
    this._userBalance = this._userBalance + balance;
  }
}

const shohanAccount = new BankAccount(231,'shohan',12000);

shohanAccount.addBalance(100);

console.log(shohanAccount)

const shohanAccount2 = new BankAccount(241,'shohan',12000);
// console.log(shohanAccount, shohanAccount2)
