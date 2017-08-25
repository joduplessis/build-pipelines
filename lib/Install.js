var exec = require('child_process').exec;
var config = require('../config');
var fs = require('fs');
var gitModulesDirectory = 'modules';

var npm = function(package) {
    exec('npm install '+package, function(error, stdout, stderr) {
        if (error==null) {
            console.log('[PASS] Successfully installed npm module: '+package);
        } else {
            console.log('[FAIL] Failed to install npm module: '+package);
        }
    });
}

var bower = function(package) {
    exec('npm install '+package, function(error, stdout, stderr) {
        if (error==null) {
            console.log('[PASS] Successfully installed bower module: '+package);
        } else {
            console.log('[FAIL] Failed to install bower module: '+package);
        }
    });
}

var removeDirectory = function(dirPath) {
  try { var files = fs.readdirSync(dirPath); }
  catch(e) { return; }
  if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
      var filePath = dirPath + '/' + files[i];
      if (fs.statSync(filePath).isFile())
        fs.unlinkSync(filePath);
      else
        removeDirectory(filePath);
    }
    fs.rmdirSync(dirPath);
};

var git = function(package, directory) {
    var modulesDirectory = gitModulesDirectory+'/'+directory;
    removeDirectory(modulesDirectory);
    exec('git clone '+package+' '+modulesDirectory, function(error, stdout, stderr) {
        if (error==null) {
            console.log('[PASS] Successfully cloned git repo into directory: '+directory);
        } else {
            console.log('[FAIL] Failed to clone git repo into directory: '+directory);
        }
    });
}

module.exports = {
    npm: npm,
    bower: bower,
    git: git
}
