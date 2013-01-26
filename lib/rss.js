var NodePie = require('nodepie'),
    async = require('async'),
    request = require('request');

module.exports = {
    getPosts: function(callback){

        request('http://habrahabr.ru/rss/hubs/', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                feed = new NodePie(body);
                feed.init();
                var posts = [];
                // output feed title
                var tasks = [];
                feed.getItems(0, 3).forEach(function(item){
                    tasks.push(function(taskCallback) {
                        var title = item.getTitle();
                        var url = item.getPermalink();
                        var text = "";
                        request(url, function (error, response, postBody){
                            if (!error && response.statusCode == 200) {
                                var rePattern = new RegExp(/<div class="content html_format">([\s\S]*?)<\/div>/mg);
                                var arrMatches = postBody.match(rePattern);
                                if (arrMatches.length){
                                    text = arrMatches[0];
                                }
                                taskCallback({
                                    title: title,
                                    url: url,
                                    text: text
                                });
                            }
                        });
                    });
                });

                async.parallel(tasks, function(err, res) {
                    console.log(res);
                    console.log(err);
                    callback(res);
                });
            }
        });
    }
}