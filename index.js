/**
 * Setting all the parsers that are used in HTTP protocol for basic case
 */
module.exports.extension = function() {
    "use strict";

    var bodyParser = require('body-parser');

    twee.emit('twee.setupHttpParsers.Start');
    twee.getApplication().use(bodyParser.json());
    twee.getApplication().use(bodyParser.urlencoded(twee.getConfig('twee:options:bodyParser:urlencoded')));
    twee.emit('twee.setupHttpParsers.End');
};
