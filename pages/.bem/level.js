var extend = require('bem/lib/util').extend,
    PRJ_TECHS = '../../',
    PATH = require('path'),
    BEMBL_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'deps.js': 'deps.js',
        'bemhtml': PATH.join(BEMBL_TECHS, 'bemhtml.js'),
        'js': 'js-i',
        'css': 'css',
        'priv': 'priv'
    }
}

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
        ])
    });

};
