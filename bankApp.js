const account = {
  accountId: 1,
  currentBalance: 1000,
  dateCredited: [],
  dateDebited: [],
  credit: [],
  debit: []
};

function withdraw(amount) {
 
};

function deposit(amount) {

};

function statement() {

};

function dataValidate(amount) {
  if (!(typeof amount === 'number')) {
    throw 'The input must be a number';
  } else if (amount <= 0) {
    throw 'The input must be positive';
  }
};

function withdrawValidate(amount) {
  if (amount > account.currentBalance) {
    throw 'You do not have enough funds in your account.';
  }
};

module.exports = {
  withdraw,
  deposit,
  statement,
  dataValidate,
  withdrawValidate
};



