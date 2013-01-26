//process.env.YENV = 'production';
MAKE.decl('Arch', {


    getLibraries: function() {

        return {
            'bem-bl': {
                type: 'git',
                url: 'git://github.com/bem/bem-bl.git',
                treeish: '0.3'
            }
        };

    }

});


MAKE.decl('BundleNode', {

    getTechs: function() {
        return [
            //'bemjson.js',
            //'bemdecl.js',
            //'deps.js',
            //'less.css',
            //'less.ie.css',
            //'bemhtml',
            //'i18n',
            //'i18n.js',
            //'html'
        ];
    }

});