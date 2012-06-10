define([
    'jQuery',
    'Underscore',
    'Backbone'
], function($, _, Backbone){
    return Backbone.View.extend({
        events: {},
        template:_.template($('#pin-template').html()),
        render: function(){
//            this.$el.html(this.template(this.model.toJSON()));
            this.$el.append($('<a>', {
                href: this.model.get('link')
            }).html($('<img>', {
                src: this.model.get('thumbnail')
            })));
            return this;
        }
    });
});