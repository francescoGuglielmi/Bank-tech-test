const account = {
  accountId: 1,
  currentBalance: 1000,
  dateCredited: [],
  dateDebited: [],
  credit: [],
  debit: []
};

function withdraw(amount) {
  dataValidate(amount);
  withdrawValidate(amount);
  processWithdrawal(amount)
  return `Withdrawn £${amount}, current balance: £${account.currentBalance}`;
};

function processWithdrawal(amount) {
  const date = new Date();
  account.currentBalance -= amount;
  account.debit.push(amount);
  account.dateDebited.push(date.toLocaleDateString()) // the date gets formatted into a string
}

function deposit(amount) {
  dataValidate(amount);
  processDeposit(amount)
  return `Deposited £${amount}, current balance: £${account.currentBalance}`;
};

function processDeposit(amount) {
  const date = new Date();
  account.currentBalance += amount;
  account.credit.push(amount);
  account.dateCredited.push(date.toLocaleDateString()) // the date gets formatted into a string
}

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
  account,
  withdraw,
  deposit,
  statement,
  dataValidate,
  withdrawValidate
};



