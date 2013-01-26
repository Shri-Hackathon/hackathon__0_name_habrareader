/** @requires BEM */
/** @requires BEM.DOM */

(function(undefined) {

BEM.DOM.decl('b-menu', {

    onSetMod : {

        'js' : function() {

        }

    }

}, {
    live: function () {
        this.liveBindTo('title','click', function (e) {
            var url = $(e.target).attr('url');

            $.get('/post?url=' + url, function (data) {
                console.log(data);
                this.findBlockOutside('b-page').findBlockInside('b-content').domElem.html(data);
            });
        });
    }
});

})();
