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

// check for saved dao
if (true) { // no saved dao
    console.log('No Saved DAO')
}


// run program
const run = async () => {
    try {

        await inquirer.getMints()
        await inquirer.askDaoAddresses()

    } catch (err) {
        console.log(err)
    }
}

run()