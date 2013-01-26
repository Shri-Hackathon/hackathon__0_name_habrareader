blocks['b-menu'] = function (data) {
    return {
        block: 'b-menu',
        js: true,
        content:
            (function (data) {
                var res = [];
                for (var i = 0; i < data.posts.length; i++) {
                    res.push({
                        elem:'title',
                        content: data.posts[i].title,
                        mix: [{
                            block: 'b-menu-item'
                        }],
                        attrs: {
                            title: data.posts[i].title,
                            // id: i,
                            url: data.posts[i].url
                        }
                    });
                }
                res[0].mix = [{
                    block: 'b-menu-item',
                    mods: {
                        state: 'current'
                    }
                }];
                return res;

            })(data)
    };
};
