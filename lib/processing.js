var Table = require('cli-table');
const chalk = require('chalk');
const jsonfile = require('jsonfile')
const Configstore = require('configstore');

// data store
const pkg = require('../package.json')
const daoConf = new Configstore(pkg.name);


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
    saveTxConfig: (data) => {
        const file = './output/tx.json'
        const obj = {
            'daoAddress': daoConf.get('dao'),
            'tokenManagerAddress': daoConf.get('tokenManager'),
            'votingAddress': daoConf.get('voting'),
            'environment': daoConf.get('network'),
            'mints': data,
            'burns': []
        }

        jsonfile.writeFile(file, obj)
            .then(res => {
                console.log('Write complete')
            })
            .catch(error => console.error(error))

    }
}