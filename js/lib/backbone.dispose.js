/**
 *
 */
(function(_, Backbone){
Backbone.View.prototype._configure = (function(_configure){
    return function(options){
        options = options || {};
        // if this view passed a parent, bind view's dispose on parent's dispose
        if('parent' in options){
            options.parent.on('dispose', this.dispose, this);
        }
        _configure.apply(this, arguments)
    }
})(Backbone.View.prototype._configure);

Backbone.View.prototype.dispose = function(){
    // trigger all child view to dispose too
    this.trigger('dispose');
    // unbind all events, so we don't have references to child views
    this.unbind();
    // remove this.el, this will also delete all DOM events of this el
    this.remove();
    // if we have a collection - unbind all events bound to this context
    this.collection && this.collection.off(null, null, this);
    // do the same with a model
    this.model      && this.model.off(null, null, this);
};
})(_, Backbone);