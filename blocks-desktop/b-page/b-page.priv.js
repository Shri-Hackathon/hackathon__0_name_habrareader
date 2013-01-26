blocks['b-page'] = function(data) {
    return {
        block : 'b-page',
        title : 'ololo',
        favicon : '/favicon.ico',
        head : [
            { elem : 'css', url : '/' + '_index.css', ie : false },
            { block : 'i-jquery', elem : 'core' },
            { elem : 'js', url : '/' + '_index.js' },
            { elem : 'meta', attrs : { name : 'description', content : '' }},
            { elem : 'meta', attrs : { name : 'keywords', content : '' }}
        ],
            content : [{
                block: 'b-link',
                content: 'ololo',
                url: 'http://ya.ru'
            },
            {
                block: 'b-layout-table',
                mods: { layout: '58-40'},
                content: [
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'gap',
                                rowspan: '2'
                            },
                            {
                                elem: 'cell',
                                content: {
                                    elem: 'inner',
                                    content: 'Left cell'
                                }
                            },
                            {
                                elem: 'cell',
                                elemMods: { position: 'r'},
                                content: 'Right cell'
                            }
                        ]
                    },
                    {
                        elem: 'row',
                        content: [
                            {
                                elem: 'cell',
                                colspan: '2',
                                content: 'Second row and one cell'
                            }
                        ]
                    }
                ]
            }
        ]
    };
};
