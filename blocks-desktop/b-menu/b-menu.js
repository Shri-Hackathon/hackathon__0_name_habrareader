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
            var self = this,
                $target = $(e.target),
                url = $target.attr('url');
            var items = this.findBlocksInside('b-menu-item');
            items.forEach(function (item) {
                item.delMod('state');
            });
            $target.bem('b-menu-item').setMod('state', 'current');

            $.get('/post?url=' + url, function (data) {
                self.findBlockOutside('b-page').findBlockInside('b-content').domElem.html(data);
            });
        });
    }
});

})();
