#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese', 'remove cheese')
  .option('-C, --chdir <path>', 'change the working directory');

 program
   .command('setup')
   .description('run remote setup commands')
   .action(function(){
     console.log('setup');
   });

 program
   .command('exec <cmd>')
   .description('run the given remote command')
   .action(function(cmd){
     console.log('exec "%s"', cmd);
   });

 program
   .command('*')
   .description('deploy the given env')
   .action(function(env){
     console.log('deploying "%s"', env);
   });

 program.parse(process.argv);


 // handler options
 if (program.peppers) console.log('  - peppers:', program.peppers);
 if (program.bbq) console.log('  - bbq:', program.bbq);
 if (program.cheese) console.log('   - cheese:', program.cheese);
 if (program.chdir) console.log('   - chdir:', program.chdir);