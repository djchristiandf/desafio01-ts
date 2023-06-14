export abstract class DioPlusAccount {
  private name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você depositou ${amount}. Seu saldo atual é ${this.balance}.`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log(`Você sacou ${amount}. Seu saldo atual é ${this.balance}.`);
    } else {
      console.log('Saldo insuficiente ou conta inválida.');
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}

export class NewAccountType extends DioPlusAccount {
  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      const newAmount = amount + 10;
      this.balance += newAmount;
      console.log(`Você depositou ${newAmount}. Seu saldo atual é ${this.balance}.`);
    }
  };
}