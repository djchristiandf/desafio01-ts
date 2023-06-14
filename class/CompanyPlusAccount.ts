import { DioPlusAccount } from './DioPlusAccount';

export class CompanyPlusAccount extends DioPlusAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você pegou um empréstimo de ${amount}. Seu saldo atual é ${this.balance}.`);
    } else {
      console.log('Conta inválida.');
    }
  };
}