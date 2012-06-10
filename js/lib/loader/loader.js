define([
    'order!lib/jquery',
    'order!lib/bootstrap',
    'order!lib/underscore',
    'order!lib/backbone',
    'order!lib/backbone.namedroutes',
    'order!lib/backbone.queryparams',
    'order!lib/backbone.dispose'
], function(){
    return {
        Backbone: Backbone.noConflict(),
        _: _.noConflict(),
        $: jQuery.noConflict()
    };
});