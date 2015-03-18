'use strict';

var MODULE_NAME = 'plugin-ipfilter';

var filter = require('express-ipfilter');
var _ = require('underscore');

var nodeplayerConfig = require('nodeplayer-config');
var coreConfig = nodeplayerConfig.getConfig();
var defaultConfig = require('./default-config.js');
var config = nodeplayerConfig.getConfig(MODULE_NAME, defaultConfig);

exports.init = function(player, logger, callback) {
    if (!player.app) {
        callback('module must be initialized after expressjs module!');
    } else {
        // TODO: separate config file for plugins?
        var checkIP = filter(config.filterStreamIPs, {
            mode: config.filterAction,
            log: config.log,
            cidr: true
        });

        _.each(config.paths, function(path) {
            player.app.use('/song', checkIP);
        });

        callback();
    }
};
