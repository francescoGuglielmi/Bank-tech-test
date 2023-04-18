const account = {
  currentBalance: 0,
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
    date: new Date().toLocaleDateString(),
    balance: account.currentBalance
  });
};

// DEPOSIT

function deposit(amount) {
  dataValidate(amount);
  processDeposit(amount);
  return `Deposited £${amount}, current balance: £${account.currentBalance}`;
};

function processDeposit(amount) {
  account.currentBalance += amount;
  account.transactions.push({
    type: 'credit',
    amount: amount,
    date: new Date().toLocaleDateString(),
    balance: account.currentBalance
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
  let grid = 'Date       || Type || Amount || Balance\n';
  let sortedTransactions = account.transactions.reverse()
  for (let i = 0; i < account.transactions.length; i++) {
    grid += sortedTransactions[i].date + ' || ' +
            sortedTransactions[i].type + ' ||  £' +
            sortedTransactions[i].amount + ' ||  £' +
            sortedTransactions[i].balance + '\n'
  };
  return grid
};

module.exports = {
  account,
  withdraw,
  deposit,
  statement,
  dataValidate,
  withdrawValidate
};



