#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Configstore = require('configstore');


// lib imports
const inquirer = require('./lib/inquirer');

// data store
const pkg = require('./package.json')
const daoConf = new Configstore(pkg.name);

// banner
const banner = () => {
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

// check for saved dao


// run program
const run = async () => {
    banner()

    try {
        let loop = true
        const newDAO = await inquirer.login()
        console.log(newDAO)
        if (newDAO) {
            await inquirer.askDaoAddresses()
        }
        let c = await inquirer.menu()
        console.log('c: ', c)
        console.log('returns: ', c.command)

        if(c.command == 'mint'){
            console.log(await inquirer.getMints());
        }
        if(c.command == 'payments'){
            console.log('paymenffts')
        }
        if(c.command == 'swap'){
            console.log('swap')
        }
        if(c.command == 'permissions'){
            console.log('permissions')
        }
        if(c.command == 'quit'){
            console.log('quit')
        }

    } catch (err) {
        console.log(err)
    }
}
run()