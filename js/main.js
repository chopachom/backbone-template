//configuring require.js
require.config({
    paths: {
        order: 'lib/order',
        text: 'lib/text',
        // loader will be use no load non-AMD modules
        loader: 'lib/loader/loader',
        jQuery: 'lib/loader/jquery',
        Underscore: 'lib/loader/underscore',
        Backbone: 'lib/loader/backbone',
        templates: '../templates'
    }
});


require(['application'], function(App){
    App.initialize();
});
