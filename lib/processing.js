const chalk = require('chalk');
const jsonfile = require('jsonfile')
const Configstore = require('configstore');
const execa = require('execa');

var Table = require('cli-table');
var nrc = require('node-run-cmd');

// data store
const pkg = require('../package.json')
const daoConf = new Configstore(pkg.name);

process.on("SIGPIPE", process.exit);


module.exports = {
    toTokenTable: (data) => {

        var table = new Table({
            head: [chalk.blueBright.bold('Address'), chalk.blueBright.bold('Ammount')],
            colWidths: [60, 30]
        });

        data.map((row) => {
            table.push(row)
        })

        return table.toString()
    },
    saveTxConfig: async (data) => {
        const file = './aragon-toolkit-examples/examples/mintAndBurn/assignations.json'
        const obj = {
            'daoAddress': '0xBDa06BBDbD11F5D6276a1c0e15A2a9D7017A2516',
            'tokenManagerAddress': '0xe19b3ffe8522feacfdb8277b58967a973d4d71f1',
            'votingAddress': '0x7e56ebb04ee98f1883a1f0840ce44b657877d100',
            'environment': 'rinkeby',
            'mints': data,
            'burns': []
        }

        jsonfile.writeFile(file, obj)
            .then(res => {
                console.log(obj)
                console.log('Write complete')
            })
            .catch(error => console.error(error))
    },
    submitTx: async () => { 
        // this is the problem 
        /*
        (async () => {
            const {
                stdout
            } = await execa(['node'], './aragon-toolkit-examples/examples/mintAndBurn/index.js \| sh')
            console.log(stdout);
        })();
        */
    }
}