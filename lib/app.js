var express = require('express'),
    app = express(),
    config = require('./config'),
    server = require('http').createServer(app),
    fs = require('fs'),
    rss = require('./rss'),
    request = require('request');

app
    .use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }))
    .use(function(req, res, next){
        console.log('%s %s', req.method, req.url);
        next();
    })
    .use(express.cookieParser())
    .use(express.bodyParser())
    .get('/', function (req, res) {
        request('http://localhost:8080/pages/index/_index.priv.js', function (error, response, body) {
            console.dir(response);
            if (!error && response.statusCode == 200) {
                rss.getPosts( function (err, posts) {
                    if (err) return;
                        var bemhtml = fs.readFile('pages/index/index.bemhtml.js', 'utf8', function (err, content) {
                            eval(content);
                            eval(body);
                            var data = {
                                posts: posts
                            };
                            rss.getPostContent(data.posts[0].url, function (content) {
                                data.posts[0].text = content;
                                var bemjson = blocks['b-page'](data);
                                var html = BEMHTML.apply(bemjson);
                                res.send(html);
                            });
                        });
                });
            } else {
                res.send('error ' + response.statusCode + ' in bem server!');
            }
        });
    })
    .get(/\/(_\w+).(\w+)/, function (req, res) {
        request('http://localhost:8080/pages/index/' + req.params[0] + '.' + req.params[1], function (error, response, body) {
            res.setHeader('Content-Type', 'text/css');
            res.end(body);
        });
    })
    .get(/\/post/, function (req, res) {
        rss.getPostContent(req.query["url"], function(content) {
            res.setHeader('Content-Type', 'text/plain');
            res.end(content);
        });
    });



module.exports = {
    start : function () {
        var config = require('./config');

        server.listen(config.port);
        console.log('server working at %s', config.port);
    }
};
