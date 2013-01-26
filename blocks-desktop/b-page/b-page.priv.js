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
            (function(data){return data;}) (data)
        ]
    };
};
