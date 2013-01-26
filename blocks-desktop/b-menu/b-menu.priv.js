blocks['b-menu'] = function (data) {
    return {
        block: 'b-menu',
        content:
            (function (data) {
                var res = [];
                for (var i = data.length - 1; i >= 0; i--) {
                    res.push({
                        elem:'title',
                        content:data[i]
                    });
                }
                res[0].mods = {'state':'current'};
                return res;

            })(data)
    };
};