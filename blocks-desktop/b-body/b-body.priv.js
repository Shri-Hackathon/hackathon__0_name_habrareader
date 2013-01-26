blocks['b-body'] = function(data) {
    return {
        block: 'b-body',
        content: [
            {
                elem: 'left',
                content: blocks['b-menu'](data)
            },
            {
                elem: 'right',
                content: blocks['b-content'](data)
            }
        ]
    }
}