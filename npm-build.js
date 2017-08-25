
// Dependancies
var install = require('./lib/Install');
var config =  require('./config');
var exec = require('child_process').exec;

// Install packages
install.npm('jquery');
install.bower('jquery');
install.git('https://joduplessis@bitbucket.org/joduplessis/fis.git', 'fis');
