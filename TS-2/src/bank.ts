class BankAccount {
  userId: number;
  userName: string;
  userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }
}

const shohanAccount = new BankAccount(231,'shohan',12000);
const shohanAccount2 = new BankAccount(241,'shohan',12000);
console.log(shohanAccount, shohanAccount2)
