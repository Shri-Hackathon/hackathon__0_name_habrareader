var NodePie = require('nodepie'),
    async = require('async'),
    request = require('request');

module.exports = {
    getPosts: function(callback) {

        request('http://habrahabr.ru/rss/hubs/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                feed = new NodePie(body);
                feed.init();
                var posts = [];
                // output feed title
                var tasks = [];
                feed.getItems(0, 50).forEach(function(item){
                    tasks.push(function(taskCallback) {
                        var title = item.getTitle();
                        var url = item.getPermalink();
                        var text = "";
                        taskCallback(null, {
                            title: title,
                            url: url,
                            text: text,
                            desc: item.getDescription()
                        });

                    });
                });
                async.parallel(tasks, function(err, res) {
                    callback(null, res);
                });
            }
        });
    },
    getPostContent: function(url, callback) {

        request(url, function (error, response, postBody){
            if (!error && response.statusCode == 200) {
                var text = "";
                var rePattern = new RegExp(/<div class="content html_format">([\s\S]*?)<\/div>\s*?<ul class="tags">/mg);
                var arrMatches = postBody.match(rePattern);
                if (arrMatches.length){
                    text = arrMatches[0];
                }
                callback(text);
            }
        });
    }
}
