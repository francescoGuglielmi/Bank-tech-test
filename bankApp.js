const account = {
  accountId: 1,
  currentBalance: 1000,
  dateCredited: [],
  dateDebited: [],
  credit: [],
  debit: []
};

function dataValidate(amount) {
  if (!(typeof amount === 'number')) {
    throw 'The input must be a number';
  } else if (amount <= 0) {
    throw 'The input must be positive';
  }
};

function withdraw(amount) {

};

function deposit(amount) {

};

function statement() {

};

module.exports = {
  dataValidate,
  withdraw,
  deposit,
  statement
};



