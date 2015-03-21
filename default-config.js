var nodeplayerConfig = require('nodeplayer').config;

var defaultConfig = {};

defaultConfig.filterStreamIPs = ['10.8.0.0/24', '127.0.0.1'];
defaultConfig.filterAction = 'allow'; // is the above a blacklist (deny) or whitelist (allow)?
defaultConfig.paths = ['/song/*'];
defaultConfig.log = true; // whether to log requests

module.exports = defaultConfig;
