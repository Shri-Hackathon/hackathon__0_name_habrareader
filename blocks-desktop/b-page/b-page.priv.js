blocks['b-page'] = function(data) {
    return {
        block : 'b-page',
        title : 'ololo',
        favicon : '/favicon.ico',
        head : [
            { elem : 'meta', attrs : { name : 'charset', content : 'UTF-8' }},
            { elem : 'css', url : '/' + '_index.css'},
            { block : 'i-jquery', elem : 'core' },
            { elem : 'js', url : '/' + '_index.js' },
            { elem : 'meta', attrs : { name : 'description', content : '' }},
            { elem : 'meta', attrs : { name : 'keywords', content : '' }}
        ],
        content : [
            {
                block: 'b-head',
                content: [
                    {
                        tag: 'h1',
                        content: 'Парсер Хабра'
                    },
                    {
                        tag: 'span',
                        content: 'Version 0.0.1'
                    }
                ]
            },
            blocks['b-body'](data)
        ]
    };
};
