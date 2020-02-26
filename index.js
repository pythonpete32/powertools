#!/usr/bin/env node

const chalk = require('chalk')
const clear = require('clear')
const figlet = require('figlet')
const Configstore = require('configstore')
const inquirer = require('./lib/inquirer')

//
const processing = require('./lib/processing');



// data store TODO: persist Data from add DAO
const pkg = require('./package.json')
const daoConf = new Configstore(pkg.name)
daoConf.set('tokenManager', '0xb0aaae4ac1f639391feedfb73a4bca4954cb8de2') // yes its hacky!
daoConf.set('network', 'rinkeby')

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
        // login logic
        const newDAO = await inquirer.login()
        console.log(newDAO)
        if (newDAO) {
            await inquirer.askDaoAddresses()
        }

        // main menu
        let c = await inquirer.menu()

        if(c.command == 'mint'){
            const mints = await inquirer.getMints();
            await inquirer.confirmMints(mints)
            processing.saveTxConfig(mints)
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