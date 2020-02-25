const inquirer = require('inquirer');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');

module.exports = {
    askDaoAddresses: async () => {
        const refresh = async () => {
            clear();
            console.log(
                chalk.blueBright(
                    figlet.textSync('Power Tools', {
                        horizontalLayout: 'full'
                    })
                )
            )
            console.log(
                chalk.blue.bold('For Aragon Power Users')
            )
        }
        await refresh()

        const questions = [{
                name: 'dao',
                type: 'input',
                message: ('Enter your ' + chalk.white.bold('DAO') + ' address:'),
                validate: function (value) {
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
                validate: function (value) {
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
                validate: function (value) {
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
    getMints: async () => {
        const refresh = async () => {
            clear();
            console.log(
                chalk.blueBright(
                    figlet.textSync('Power Tools', {
                        horizontalLayout: 'full'
                    })
                )
            )
            console.log(
                chalk.blue.bold('For Aragon Power Users')
            )
        }
        await refresh()
        
        const mints = []
        let more = true

        while (more) {
            const questions = [{
                    name: 'reciever',
                    type: 'input',
                    message: ('Enter the ' + chalk.redBright.bold('Recievers') + ' address:'),
                    validate: function (value) {
                        if (value.length == 42) {
                            return true;
                        } else {
                            return 'Please enter a valid Ethereum address';
                        }
                    }
                },
                {
                    name: 'ammount',
                    type: 'number',
                    message: ('Enter the ' + chalk.redBright.bold('Ammount') + ' to mint:'),
                    validate: function (value) {
                        if (value >= 0) {
                            return true;
                        } else {
                            return 'Please enter a value greater than 0';
                        }
                    }
                },
                {
                    name: 'again',
                    type: 'confirm',
                    message: chalk.bold('Mint to another address?'),
                    default: true
                },
            ]
            const res = await inquirer.prompt(questions);
            mints.push([res.reciever, String(res.ammount * (10 ** 18))])

            if (!res.again){
                more = false
            }

        }
        return mints
    },
};