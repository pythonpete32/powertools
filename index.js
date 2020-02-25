#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const Configstore = require('configstore');
const chalkAnimation = require('chalk-animation');


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
if (daoConf) { // no saved dao
    console.log(daoConf)
    setTimeout(() => {
    }, 1000);
}


// run program
const run = async () => {
    banner()

    try {
        const newDAO = await inquirer.login()
        console.log(newDAO)
        if (newDAO){
            await inquirer.askDaoAddresses()
        }    
        
        await inquirer.getMints()

    } catch (err) {
        console.log(err)
    }
}
run()