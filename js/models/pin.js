define([
    'Underscore',
    'Backbone'
],function(_, Backbone){
    var Pin = Backbone.Model.extend({
        defaults: {
            image: '/img/placeholder.png'
        }
    });
    var PinList = Backbone.Collection.extend({
        url: '/api/walls/youtube',
        model: Pin
    });
    return {
        Model: Pin,
        Collection: PinList
    }

});