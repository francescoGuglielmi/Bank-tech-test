const App = require('./bankApp.js');

describe('dataValidate', () => {

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

  test(('throws an error if the amount is negative'), () => {
    expect(() => {
      App.dataValidate(-600)}).toThrow('The input must be positive');
  });

  test(('throws an error if the amount is not a number'), () => {
    expect(() => {
      App.dataValidate('hello')}).toThrow('The input must be a number');
  });

});