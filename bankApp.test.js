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
      expect(App.withdraw(600)).toBe('Withdrawn £600, current balance: £400');
    });
  
    test('it withdraws a certain amount from the currentBalance', () => {
      expect(App.withdraw(1000)).toBe('Withdrawn £1000, current balance: £0');
    });

  });
  
  describe('deposit', () => {
  
    test('adds a certain amount to the currentBalance', () => {
      expect(App.deposit(500)).toBe('Deposited £500, current balance: £1500');
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


