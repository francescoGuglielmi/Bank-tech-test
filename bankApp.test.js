const App = require('./bankApp.js');

describe('App', () => {

  beforeEach(() => {
    App.account.currentBalance = 1000;
    App.account.transactions = [];
  }); 

  describe('dataValidate', () => {                        

    test(('throws an error if the amount is negative'), () => {
      expect(() => {
        App.dataValidate(-600);
      }).toThrow('The input must be positive');
    });
  
    test(('throws an error if the amount is not a number'), () => {
      expect(() => {
        App.dataValidate('hello');
      }).toThrow('The input must be a number');
    });
  
  });
  
  describe('withdrawValidate', () => {
  
    test('it throws an error if the amount for withdrawal is higher than the currentBalance', () => {
      expect(() => {
        App.withdrawValidate(1100);
      }).toThrow('You do not have enough funds in your account.');
    });
  
  });
  
  describe('withdraw', () => {
  
    test('it withdraws a certain amount from the currentBalance', () => {
      expect(App.withdraw(1000)).toBe('Withdrawn £1000, current balance: £0');
    });

    // With this test we are testing indirectly the function processWithdrawal 

    test('it withdraws a certain amount from the currentBalance and verifies it', () => {
      expect(App.withdraw(600)).toBe('Withdrawn £600, current balance: £400');
      expect(App.withdraw(100.99)).toBe('Withdrawn £100.99, current balance: £299.01');
      expect(App.account.transactions[0]).toEqual({ type: 'debit', amount: 600, date: new Date().toLocaleDateString(), balance: 400 });
      expect(App.account.transactions[1]).toEqual({ type: 'debit', amount: 100.99, date: new Date().toLocaleDateString(), balance: 299.01 });
      expect(App.account.currentBalance).toEqual(299.01);
    });

  });
  
  describe('deposit', () => {
  
    test('adds a certain amount to the currentBalance', () => {
      expect(App.deposit(500)).toBe('Deposited £500, current balance: £1500');
    });

    // With this test we are testing indirectly the function processDeposit

    test('adds a certain amount to the currentBalance and verifies it', () => {
      expect(App.deposit(500)).toBe('Deposited £500, current balance: £1500');
      expect(App.deposit(200.35)).toBe('Deposited £200.35, current balance: £1700.35');
      expect(App.account.transactions[0]).toEqual({ type: 'credit', amount: 500, date: new Date().toLocaleDateString(), balance: 1500.00 });
      expect(App.account.transactions[1]).toEqual({ type: 'credit', amount: 200.35, date: new Date().toLocaleDateString(), balance: 1700.35 });
      expect(App.account.currentBalance).toEqual(1700.35);
    });

  });
  
  describe('statement', () => {

    test('it displays the account history', () => {
      expect(App.statement()).toEqual('Date       || Type || Amount || Balance\n');
    });

    test('it displays the account history', () => {
      let date = new Date().toLocaleDateString();
      App.deposit(600);
      App.withdraw(550);
      expect(App.statement()).toEqual(`Date       || Type || Amount || Balance\n${date} || debit ||  £550 ||  £1050\n${date} || credit ||  £600 ||  £1600\n`)
    });

  });

});


