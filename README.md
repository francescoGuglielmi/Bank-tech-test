# Bank-tech-test

This is a test to outline the ability to write high quality code.

The program comprises in a basic bank app that allows to make deposits and widthdrawals from a user account. 

As per my approach, I tried to rely exclusively on functions rather than classes to try to keep it simple and to test my ability of using an alternative approach to the one that seems the most conventional in this case. The data is stored in a simple object called 'account', is therefore not possible to create multiple accounts. Instead, you can re-run the program to reset your account.

This is a demo of the expected output from the app.

<img src="https://github.com/francescoGuglielmi/Bank-tech-test/blob/main/public/app_in_use.png" width="500" >

## Test coverage at last commit

 ![Test coverage](https://github.com/francescoGuglielmi/Bank-tech-test/blob/main/public/test_coverage.png)

## Setup

**Packages Used:**

- node.js 
- jest.js

**Run these commands inside the project directory:**

- Install nvm

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

- Install node 

```
nvm install node
```

- Enable node inside the directory

```
nvm use node
```

- Install jest

```
npm install jest
```

- You can check the test coverage report by running this command directly in the terminal

```
npx jest --coverage --watchAll=false
```

## Test it!

**There is no UI but is possible to call the available functions from a REPL like node.**

 Uncomment from line 87 to 91 and run the following command in the project directory to see a default output:

 ```
 node bankApp.js 
 ```

 Alternatively, open the REPL by running this in the project directory:

 ```
 node
 ```

 then require the file inside like this:

 ```javascript
 const App = require('./bankApp.js');
 ```

now you can call the functions and see their output!

```javascript
// account balance defaults to 0
App.deposit(500) // adds £500 to the account balance
App.withdraw(100) // withdraws £100 from the balance
App.statement() // returns the statement of the account
```

