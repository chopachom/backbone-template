define(['jQuery', 'Underscore','Backbone'],
function($, _, Backbone){
    var ApplicationRouter = Backbone.Router.extend({
        initialize: function() {
        },
        routes: {
            '': 'index'
        },
        index:function(){

        }
    });

    console.log('router initialized');
    return ApplicationRouter
});