blocks['b-menu'] = function (data) {
    return {
        block: 'b-menu',
        js: true,
        content:
            (function (data) {
                var res = [];
                for (var i = data.posts.length - 1; i >= 0; i--) {
                    res.push({
                        elem:'title',
                        content:data.posts[i].title,
                        attrs: {
                            title: data.posts[i].title
                        },
                        attrs: {
                            id: i,
                            url: data.posts[i].url
                        }
                    });
                }
                res[0].mods = {'state':'current'};
                return res;

            })(data)
    };
};