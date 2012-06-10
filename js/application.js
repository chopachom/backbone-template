// Application module. All it does is initialization of the application
define([
    'jQuery',
    'Underscore',
    'Backbone',
    'router'
], function($, _, Backbone, Router){
    var initialize = function(){
        // Instantiate router and extend the View's prototype to include a reference to the router
        Backbone.View.prototype.router = new Router;
        console.log('initialized!');
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});