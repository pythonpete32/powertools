const inquirer = require('inquirer');
const chalk = require('chalk');

module.exports = {
  askDaoAddresses: () => {
    const questions = [
      {
        name: 'dao',
        type: 'input',
        message: ('Enter your ' + chalk.white.bold('DAO') + ' address:'),
        validate: function( value ) {
          if (value.length == 42) {
            return true;
          } else {
            return 'Please enter a valid Ethereum address';
          }
        }
      },
      {
        name: 'voting',
        type: 'input',
        message: ('Enter your ' + chalk.white.bold('Voting') + ' address:'),
        validate: function( value ) {
          if (value.length == 42) {
            return true;
          } else {
            return 'Please enter a valid Ethereum address';
          }
        }
      },
      {
        name: 'finance',
        type: 'input',
        message: ('Enter your ' + chalk.white.bold('Finance') + ' address:'),
        validate: function( value ) {
          if (value.length == 42) {
            return true;
          } else {
            return 'Please enter a valid Ethereum address';
          }
        }
      },
      {
        name: 'network',
        type: 'checkbox',
        message: 'Which network is the DAO on:',
        choices: [
            'mainnet',
            'rinkeby'
        ]
      }
    ];
    return inquirer.prompt(questions);
  },
};
