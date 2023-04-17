const App = require('./bankApp.js');

describe('App', () => {

  beforeEach(() => {
    const account = {
      id: 2,
      currentBalance: 1000,
      dateCredited: [],
      dateDebited: [],
      credit: [],
      debit: []
    }
  });

  describe('dataValidate', () => {                        

    test(('throws an error if the amount is negative'), () => {
      expect(() => {
        App.dataValidate(-600)
      }).toThrow('The input must be positive');
    });
  
    test(('throws an error if the amount is not a number'), () => {
      expect(() => {
        App.dataValidate('hello')
      }).toThrow('The input must be a number');
    });
  
  });

  describe('withdrawValidate', () => {

    test('it throws an error if the amount for withdrawal is higher than the currentBalance', () => {
      expect(() => {
        withdrawValidate(1100)
      }).toThrow('You do not have enough funds in your account.');
    });

  });
});
