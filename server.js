var express = require('express'),
    app = express.createServer();

app.configure('development', function(){
    //noinspection JSCheckFunctionSignatures,JSUnresolvedFunction
    app.use(express.static(__dirname));
    //noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.listen(3001);
console.log('Listening on port 3001');

