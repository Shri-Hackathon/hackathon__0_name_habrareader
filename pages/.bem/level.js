var extend = require('bem/lib/util').extend,
    PRJ_TECHS = '../../',
    PATH = require('path'),
    CUSTOM_TECHS = PATH.join(PRJ_TECHS, '.bem/techs'),
    BEMBL_TECHS = '../../bem-bl/blocks-common/i-bem/bem/techs';

exports.getTechs = function() {
    return {
        'bemjson.js': '',
        'bemdecl.js': 'bemdecl.js',
        'deps.js': 'deps.js',
        'bemhtml': PATH.join(BEMBL_TECHS, 'bemhtml.js'),
        'js': 'js-i',
        'css': 'css',
        'priv.js': PATH.join(CUSTOM_TECHS, 'priv.js'),
        'html': PATH.join(BEMBL_TECHS, 'html.js')
    }
}

exports.getConfig = function() {
    return extend({}, this.__base() || {}, {
        bundleBuildLevels: this.resolvePaths([
            '../../bem-bl/blocks-common',
            '../../bem-bl/blocks-desktop',
            '../../blocks-desktop'
        ])
    });

};
