blocks['b-page'] = function(data) {
    return {
        block : 'b-page',
        title : 'Парсер Хабра',
        favicon : '/favicon.ico',
        head : [
            { elem : 'css', url : '/' + '_index.css'},
            { block : 'i-jquery', elem : 'core' },
            { elem : 'js', url : '/' + '_index.js' }
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
