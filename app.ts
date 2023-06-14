import { CompanyPlusAccount } from './class/CompanyPlusAccount'
import { PeoplePlusAccount } from './class/PeoplePlusAccount'

// const peopleAccount: PeoplePlusAccount = new PeoplePlusAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()
// const companyAccount: CompanyPlusAccount = new CompanyPlusAccount('DIO', 20)
// companyAccount.deposit()
// console.log(companyAccount)

const peopleAccount: PeoplePlusAccount = new PeoplePlusAccount(1, 'Christian', 20);
console.log(peopleAccount);

peopleAccount.deposit(100);
peopleAccount.withdraw(50);
//peopleAccount.getLoan(200);
peopleAccount.getBalance();

const companyAccount: CompanyPlusAccount = new CompanyPlusAccount('DIO', 20);
console.log(companyAccount);

companyAccount.deposit(100);
companyAccount.withdraw(50);
companyAccount.getLoan(200);
companyAccount.getBalance();