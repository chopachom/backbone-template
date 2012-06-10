define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/pin',
    'views/pin'
], function($, _, Backbone, Pin, PinView){
    return Backbone.View.extend({
        el: $('body'),
        initialize: function(){
            this.collection = new Pin.Collection;
            this.collection.fetch({
                success: _.bind(this.render, this)
            });
        },
        render: function(){
            this.collection.each(function(pin){
                this.$el.append(new PinView({model:pin}).render().el);
            }, this);
            return this;
        }
    });
});