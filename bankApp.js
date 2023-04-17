const account = {
  accountId: 1,
  currentBalance: 1000,
  transactions: []
};

// WITHDRAW

function withdraw(amount) {
  dataValidate(amount);
  withdrawValidate(amount);
  processWithdrawal(amount);
  return `Withdrawn £${amount}, current balance: £${account.currentBalance}`;
};

function processWithdrawal(amount) {
  account.currentBalance -= amount;
  account.transactions.push({
    type: 'debit',
    amount: amount,
    date: new Date()
  });
};

// DEPOSIT

function deposit(amount) {
  dataValidate(amount);
  processDeposit(amount);
  return `Deposited £${amount}, current balance: £${account.currentBalance}`;
};

function processDeposit(amount) {
  const date = new Date();
  account.currentBalance += amount;
  account.transactions.push({
    type: 'credit',
    amount: amount,
    date: date.toLocaleDateString()
  });
};

// DATA VALIDATION

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

// DISPLAY STATEMENT

function statement() {
 
};

module.exports = {
  account,
  withdraw,
  deposit,
  statement,
  dataValidate,
  withdrawValidate
};



