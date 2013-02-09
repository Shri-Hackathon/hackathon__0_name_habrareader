blocks['b-page'] = function(data) {
    return {
        block : 'b-page',
        title : 'Парсер Хабра',
        favicon : '/favicon.ico',
        head : [
            { elem : 'css', url : 'http://habrahabr.ru/styles/1360227546/all.css'},
            { elem : 'css', url : 'http://habrahabr.ru/styles/1360227546/_parts/posts.css'},
            { elem : 'css', url : 'http://habrahabr.ru/styles/1360227546/highlight.css'},
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
                        content: 'RSS reader'
                    },
                    {
                        tag: 'span',
                        content: 'Version 1.0.0'
                    }
                ]
            },
            blocks['b-body'](data)
        ]
    };
};
