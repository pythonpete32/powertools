#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


// lib imports



// banner
clear();
console.log(
    chalk.yellow(
        figlet.textSync('G-Strap', {
            horizontalLayout: 'full'
        })
    )
);

// check for saved dao


// run program
const run = async () => {
    try {
        console.log("running............")
    } catch(err) {
        console.log(err)
    }
}

run()