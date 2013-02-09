blocks['b-content'] = function(data) {
    return {
        block: 'b-content',
        cls: 'post',
        content: data.posts[0].text
    }
}
