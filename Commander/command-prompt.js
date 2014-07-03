#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
    .version('0.0.1')
    .option('-C, --chdir <path>', 'change the working directory')
    .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
    .option('-T, --no-tests', 'ignore test hook');

program
    .prompt('Username: ', function(name) {
        console.log('hi %s', name);
    })
    .command('setup')
    .description('run remote setup commands')
    .action(function() {
        console.log('setup');
    });

program.parse(process.argv);
