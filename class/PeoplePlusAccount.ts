import { DioPlusAccount } from './DioPlusAccount';

export class PeoplePlusAccount extends DioPlusAccount {
  doc_id: number;

  constructor(doc_id: number, name: string, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      const newAmount = amount + 10;
      this.balance += newAmount;
      console.log(`Você depositou ${newAmount}. Seu saldo atual é ${this.balance}.`);
    }
  };
}